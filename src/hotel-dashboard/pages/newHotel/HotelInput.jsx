import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useEffect, useState } from "react";
import api from "../../../api/AxiosConfig";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

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
        <div
          key={index}
          className="imageContainer relative w-[48%] max-h-[215px] m-[1%]"
        >
          <img
            src={typeof file === "string" ? file : URL.createObjectURL(file)}
            alt=""
          />
          <button
            onClick={() => handleRemoveImage(index)}
            className="removeButton w-[15px] h-[15px] absolute bg-[red] text-[white] cursor-pointer text-xs flex items-center justify-center p-[5px] rounded-[50%] border-[none] right-[5px] top-[5px]"
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
  const vietnamProvinces = ["Hà Nội", "Hồ Chí Minh", "Đà Nẵng", "Hải Phòng"];
  return (
    <div className="new">
    // modal bootstrap here
    // sidebar here
    // loading spinner here
      <div className="newContainer flex-grow-6">
      // navbar here
        <div className="top shadow-md p-4 m-5 flex">
          <h1>Chi tiết khách sạn</h1>
        </div>
        <div className="bottom shadow-md p-4 m-5 flex">
          <div className="left flex-1 text-center flex flex-wrap">
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
          <div className="right flex-2 px-5">
            <form className="flex flex-wrap gap-7 justify-between">
              <div className="formInput image w-full">
                <label
                  htmlFor="file"
                  className="flex items-center gap-2 font-bold mb-1"
                >
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

              // hotelinput here
              <div className="formInput w-full">
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
              <div className="formInput w-full">
                <label className="flex items-center gap-2 font-bold mb-1">
                  Địa điểm
                </label>
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
              <div className="formInput w-full">
                <label>Xếp hạng chỗ nghỉ</label>
                <select
                  id="star"
                  className="form-select w-full p-2"
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
              <div className="formInput w-full">
                <label className="flex items-center gap-2 font-bold mb-1">
                  Các tiện ích
                </label>
                <select
                  id="facilities"
                  multiple
                  onChange={handleSelectChange}
                  className="multi-select w-full px-2"
                >
                  <option value={"non_smoking"}>Phòng không hút thuốc</option>
                  <option value={"family_room"}>Phòng gia đình</option>
                  <option value={"free_wifi"}>Wifi miễn phí</option>
                  <option value={"private_parking"}>Chỗ để xe</option>
                  <option value={"elevator"}>Thang máy</option>
                  <option value={"air_conditioning"}>Điều hòa</option>
                </select>
              </div>
              <div className="formInput desc w-full">
                <label className="flex items-center gap-2 font-bold mb-1">
                  Thông tin khách sạn
                </label>
                <textarea
                  id={"description"}
                  onChange={handleChange}
                  value={info["description"]}
                  className="w-full p-2"
                />
              </div>

              <div className="flex justify-center w-full mt-12">
                <button
                  className="submit-button w-[150px] p-3 rounded-md bg-teal-500 text-white font-bold cursor-pointer"
                  onClick={handleClick}
                >
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
