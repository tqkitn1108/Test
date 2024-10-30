import React, { useEffect, useState } from 'react';
import './table.css';
import { differenceInDays } from 'date-fns';
import api from "../../../api/AxiosConfig";
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const Table = () => {
  const { hotelId } = useParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const stayLength = differenceInDays(new Date(searchParams.get('checkOut')), new Date(searchParams.get('checkIn'))) + 1;
  const [selectedRooms, setSelectedRooms] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  const [availRoomTypes, setAvailRoomTypes] = useState([]);
  const navigate = useNavigate();

  const handleReservation = () => {
    navigate(`${location.pathname}/reservation${location.search}`;

  useEffect(() => {
    async function loadRooms() {
      try {
        setTotalPrice(0);
        if (searchParams.get('checkIn')) {
          const response = await api.get(`/hotels/${hotelId}/roomTypes/available?checkIn=${searchParams.get('checkIn')}&checkOut=${searchParams.get('checkOut')}`);
          setAvailRoomTypes(response.data)
        }
      } catch (err) {
        console.log(error);
      }
    }
    loadRoom();
  }, [location.search]);

  useEffect(() => {
    setTotalPrice(availRoomTypes?.reduce((sum, roomType) => {
      return sum + (selectedRooms[roomType.id]?.length || 0) * roomType.pricePerNight * stayLength;
    }, 0));
  }, [selectedRooms]);

  return (
    <div className='containerT'>
      {availRoomTypes?.length > 0 ? (
        <div className='room-list'>
          <h3 className="hotelTitle mt-5">Phòng trống</h3>
          <table striped>
            <thead>
              <tr>
                <th>Loại phòng</th>
                <th>Số lượng khách</th>
                <th>Giá cho {stayLength} đêm</th>
                <th>Điều kiện hủy bỏ</th>
                <th>Chọn số lượng</th>
              </tr>
            </thead>
            <tbody>
              {availRoomTypes?.map((roomType) =>
              (<tr key={roomType.id} className='room-row'>
                <div className='Studio'>
                  <h1>{roomType.title}</h1>
                </div>
                <td>{roomType.capacity}</td>
                <td>VND {(roomType.pricePerNight * stayLength).toLocaleString('vi-VN')}</td>
                <td width={'200px'}>Hoàn tiền 100% trong vòng 24h sau đặt cọc</td>
                <td width={'100px'}>
                </td>
              </tr>))}
            </tbody>
          </table>
        </div>
      ) : <h3 className="mt-5 text-center">Ngày bạn chọn đã hết phòng!</h3>}
    </div>
  );
};

export default Table;
