import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import ModalBootstrap from "../../../components/modal/ModalBootstrap";
import { useEffect, useState } from "react";
import { hotelInputs } from "../../../data/formSource";
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
}
export default HotelInput;
