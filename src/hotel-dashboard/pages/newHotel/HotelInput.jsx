import "./newHotel.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import ModalBootstrap from "../../../components/modal/ModalBootstrap";
import { useEffect, useState } from "react";
import { hotelInputs } from "../../../data/formSource";
import api from "../../../api/AxiosConfig";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import LoadingSpinner from "../../../components/loading-spinner/LoadingSpinner";

const HotelInput = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [images, setImages] = useState([]);
  const [facilities, setFacilities] = useState([]);
  const [info, setInfo] = useState({});
  const location = useLocation();
  const hotelId = new URLSearchParams(location.search).get("hotelId");

  useEffect(() => {
    async function renderHotelDetails() {
      try {
        const response = await api.get(`/business/hotels/${hotelId}`);
        setInfo(response.data);
        setImages(response.data.photos);
      } catch (error) {
        console.log(error);
      }
    }
    if (hotelId) {
      renderHotelDetails();
    }
  }, []);

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSelectChange = (event) => {
    const options = event.target.options;
    const selectedOptionsArray = Array.from(options).filter(
      (option) => option.selected
    );
    const selectedValues = selectedOptionsArray.map((option) => option.value);
    setFacilities(selectedValues);
  };

  const handleImageChange = (e) => {
    if (e.target.files && images.length + e.target.files.length <= 6) {
      const fileListArray = Array.from(e.target.files);
      setImages((prevImages) => prevImages.concat(fileListArray));
    }
  };

  const renderPhotos = (source) => {
    return source.map((file, index) => {
      return (
        <div key={index} className="imageContainer">
          <img
            src={typeof file === "string" ? file : URL.createObjectURL(file)}
            alt=""
          />
          <button
            onClick={() => handleRemoveImage(index)}
            className="removeButton"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
      );
    });
  };

  const handleRemoveImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const list = await Promise.all(
        images.map(async (image) => {
          if (typeof image !== "string") {
            const data = new FormData();
            data.append("file", image);
            const uploadRes = await api.post("/upload", data);
            const url = uploadRes.data;
            return url;
          }
          return image;
        })
      );

      const newhotel = {
        ...info,
        photos: list,
        email: JSON.parse(localStorage.getItem("user")).userEmail,
      };
      if (!newhotel.facilities) newhotel.facilities = facilities;

      if (hotelId) {
        await api.put(`/business/hotels/${hotelId}`, newhotel);
      } else {
        await api.post("/business/hotels", newhotel);
      }
      setModalMessage("Thành công! Quay trở lại trang chủ.");
    } catch (err) {
      setModalMessage(err.response);
    }
    setLoading(false);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    navigate("/business/hotels");
  };
  const vietnamProvinces = [
    "Sa Pa",
    "Vũng Tàu",
    "Bắc Giang",
    "Hạ Long",
    "Sầm Sơn",
    "Bắc Ninh",
    "Bến Tre",
    "Bình Định",
    "Bình Dương",
    "Bình Phước",
    "Bình Thuận",
    "Hội An",
    "Cao Bằng",
    "Đà Lạt",
    "Điện Biên Phủ",
    "Tuy Hòa",
    "Đồng Nai",
    "Đồng Tháp",
    "Gia Lai",
    "Hà Giang",
    "Hà Nam",
    "Hà Tĩnh",
    "Hải Dương",
    "Cửa Lò",
    "Phong Nha",
    "Hưng Yên",
    "Khánh Hòa",
    "Kiên Giang",
    "Kon Tum",
    "Lai Châu",
    "Lâm Đồng",
    "Đảo Cát Bà",
    "Lào Cai",
    "Long An",
    "Mỹ Tho",
    "Nghệ An",
    "Ninh Bình",
    "Ninh Thuận",
    "Phú Thọ",
    "Quảng Bình",
    "Quảng Nam",
    "Quảng Ngãi",
    "Quảng Ninh",
    "Quảng Trị",
    "Sóc Trăng",
    "Sơn La",
    "Phú Quốc",
    "Thái Bình",
    "Thái Nguyên",
    "Thanh Hóa",
    "Huế",
    "Tiền Giang",
    "Quy Nhơn",
    "Tuyên Quang",
    "Vĩnh Long",
    "Vĩnh Phúc",
    "Nha Trang",
    "Phú Yên",
    "Cần Thơ",
    "Đà Nẵng",
    "Hải Phòng",
    "Hà Nội",
    "TP. Hồ Chí Minh",
  ];
  return (
    <div className="new w-full flex">
      <ModalBootstrap
        body={modalMessage}
        showModal={showModal}
        handleCloseModal={handleCloseModal}
      />
      <Sidebar hideSideBar={true} />
      {loading && <LoadingSpinner />}
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Chi tiết khách sạn</h1>
        </div>
        <div className="bottom">
          <div className="left">
            {renderPhotos(images)}
            {/* <img
              src={
                files
                  ? URL.createObjectURL(files[0])
                  : (info?.photos?.[0] || "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg")
              }
              alt=""
            /> */}
          </div>
          <div className="right">
            <form>
              <div className="formInput image">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  multiple
                  onChange={handleImageChange}
                  style={{ display: "none" }}
                />
              </div>

              {hotelInputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    id={input.id}
                    onChange={handleChange}
                    type={input.type}
                    placeholder={input.placeholder}
                    value={info[input.id]}
                  />
                </div>
              ))}
              <div className="formInput">
                <label>Kiểu chỗ nghỉ</label>
                <select
                  id="type"
                  className="form-select"
                  aria-label="Default select example"
                  value={info?.type?.name}
                  onChange={handleChange}
                >
                  <option selected disabled>
                    {" "}
                    -- Chọn kiểu chỗ nghỉ --
                  </option>
                  <option value={"hotel"}>Khách sạn</option>
                  <option value={"apartment"}>Căn hộ</option>
                  <option value={"resort"}>Resort</option>
                  <option value={"villa"}>Biệt thự</option>
                  <option value={"guest_house"}>Nhà khách</option>
                  <option value={"Homestays"}>Homestays</option>
                  <option value={"glamping"}>Glamping</option>
                  <option value={"other"}>Khác </option>
                </select>
              </div>
              <div className="formInput">
                <label>Địa điểm</label>
                <select
                  id="dest"
                  className="form-select"
                  aria-label="Default select example"
                  value={info?.dest}
                  onChange={handleChange}
                >
                  <option selected disabled>
                    -- Chọn địa điểm --
                  </option>
                  {vietnamProvinces.sort().map((province, index) => (
                    <option key={index} value={province}>
                      {province}
                    </option>
                  ))}
                </select>
              </div>
              <div className="formInput">
                <label>Xếp hạng chỗ nghỉ</label>
                <select
                  id="star"
                  className="form-select"
                  aria-label="Default select example"
                  value={info?.star}
                  onChange={handleChange}
                >
                  <option disabled selected>
                    {" "}
                    -- Chọn xếp hạng chỗ nghỉ --
                  </option>
                  <option value={0}>Không xếp hạng</option>
                  <option value={1}>Khách sạn 1 sao</option>
                  <option value={2}>Khách sạn 2 sao</option>
                  <option value={3}>Khách sạn 3 sao</option>
                  <option value={4}>Khách sạn 4 sao</option>
                  <option value={5}>Khách sạn 5 sao</option>
                </select>
              </div>
              <div className="formInput">
                <label>Các tiện ích</label>
                <select
                  id="facilities"
                  multiple
                  onChange={handleSelectChange}
                  className="multi-select"
                >
                  <option value={"non_smoking"}>Phòng không hút thuốc</option>
                  <option value={"family_room"}>Phòng gia đình</option>
                  <option value={"free_wifi"}>Wifi miễn phí</option>
                  <option value={"private_parking"}>Chỗ để xe</option>
                  <option value={"elevator"}>Thang máy</option>
                  <option value={"air_conditioning"}>Điều hòa</option>
                </select>
              </div>
              <div className="formInput desc">
                <label>Thông tin khách sạn</label>
                <textarea
                  id={"description"}
                  onChange={handleChange}
                  value={info["description"]}
                />
              </div>

              <div className="d-flex justify-content-center">
                <button className="submit-button" onClick={handleClick}>
                  {hotelId ? "Cập nhật" : "Đăng ký khách sạn"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelInput;
