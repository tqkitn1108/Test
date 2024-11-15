import { useState } from "react";
import api from "../../../api/AxiosConfig";
import { useNavigate, useParams } from "react-router-dom";

const RoomInput = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const navigate = useNavigate();
  const [info, setInfo] = useState({});
  const { hotelId } = useParams();
  const [rooms, setRooms] = useState([]);
  const [bedList, setBedList] = useState([]);
  const [amenities, setAmenities] = useState([]);

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const roomNumbers = rooms.split(",").map((room) => room.trim());
    const beds = bedList.split(",").map((bed) => bed.trim());
    try {
      console.log({ ...info, rooms, amenities, beds });
      await api.post(`/hotels/${hotelId}/roomTypes`, {
        ...info,
        roomNumbers,
        amenities,
        beds,
      });
      setModalMessage("Thành công! Quay trở lại trang khách sạn.");
    } catch (err) {
      setModalMessage(err.response);
    }
    setShowModal(true);
  };

  const handleSelectChange = (event) => {
    const options = event.target.options;
    const selectedOptionsArray = Array.from(options).filter(
      (option) => option.selected
    );
    const selectedValues = selectedOptionsArray.map((option) => option.value);
    setAmenities(selectedValues);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    navigate(`/business/hotels/${hotelId}`);
  };

  return (
    <div className="new w-full flex">
      {/* model bootstrap here */}
      {/* sidebar here */}
      <div className="newContainer flex-[6]">
        {/* navbar here */}
        <div className="top flex p-4 m-5 shadow-lg shadow-gray-400">
          <h1 className="text-lightgray text-xl">Add New Room</h1>
        </div>
        <div className="bottom flex p-4 m-5 shadow-lg shadow-gray-400">
          <div className="right flex-2">
            <form className="flex flex-wrap gap-8 justify-between px-5">
              {/*room input here*/}
              <div className="formInput w-[40%]">
                <label className="label flex items-center gap-2">
                  Kiểu giường
                </label>
                <input
                  id="beds"
                  type="text"
                  placeholder={"1 king bed, 2 queen beds"}
                  onChange={(e) => setBedList(e.target.value)}
                  className="w-full p-1 border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="formInput w-[40%]">
                <label className="label flex items-center gap-2">
                  Các tiện ích
                </label>
                <select
                  id="amenities"
                  multiple
                  onChange={handleSelectChange}
                  className="multi-select w-full p-2 border rounded-md focus:outline-none"
                >
                  <option value={"Ban công"}>Ban công</option>
                  <option value={"Nhìn ra vườn"}>Nhìn ra vườn</option>
                  <option value={"free_wifi"}>Nhìn ra núi</option>
                  <option value={"free_wifi"}>
                    Nhìn ra địa danh nổi tiếng
                  </option>
                  <option value={"free_wifi"}>Nhìn ra thành phố</option>
                  <option value={"free_wifi"}>Điều hòa không khí</option>
                  <option value={"free_wifi"}>Máy pha cà phê</option>
                  <option value={"free_wifi"}>Bồn tắm spa</option>
                </select>
              </div>
              <div className="formInput w-full">
                <label className="label flex items-center gap-2">
                  Danh sách phòng cùng loại
                </label>
                <textarea
                  onChange={(e) => setRooms(e.target.value)}
                  placeholder="Nhập danh sách phòng"
                  className="w-full p-2 border rounded-md focus:outline-none"
                />
              </div>
              <button onClick={handleClick}>Gửi</button>
            </form>
          </div>
        </div>
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default RoomInput;
