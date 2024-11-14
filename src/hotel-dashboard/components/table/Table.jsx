import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BookingList = () => {
    const { hotelId } = useParams();
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        async function loadData() {
            try {
                const response = await fetch(`https://booking-app-backend-2mxz.onrender.com/api/v1/hotels/${hotelId}`);
                const data = await response.json();
                setBookings(data);
            } catch (error) {
                console.log(error);
            }
        }
        loadData();
    }, [hotelId]);

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
                <thead>
                    <tr>
                        <th className="px-4 py-2 border-b-2 border-gray-200">Mã đặt phòng</th>
                        <th className="px-4 py-2 border-b-2 border-gray-200">Người đặt</th>
                        <th className="px-4 py-2 border-b-2 border-gray-200">Email</th>
                        <th className="px-4 py-2 border-b-2 border-gray-200">Ngày nhận phòng</th>
                        <th className="px-4 py-2 border-b-2 border-gray-200">Ngày trả phòng</th>
                        <th className="px-4 py-2 border-b-2 border-gray-200">Danh sách phòng</th>
                        <th className="px-4 py-2 border-b-2 border-gray-200">Giá (VND)</th>
                        <th className="px-4 py-2 border-b-2 border-gray-200">Phương thức thanh toán</th>
                        <th className="px-4 py-2 border-b-2 border-gray-200">Trạng thái</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.map((booking) => (
                        <tr key={booking.id}>
                            <td className="px-4 py-2 border-b border-gray-200">{booking.id}</td>
                            <td className="px-4 py-2 border-b border-gray-200">
                                <div className="flex items-center">
                                    <img className="w-8 h-8 rounded-full mr-2 object-cover" src={booking.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"} alt="avatar" />
                                    {booking.fullName}
                                </div>
                            </td>
                            <td className="px-4 py-2 border-b border-gray-200">{booking.email}</td>
                            <td className="px-4 py-2 border-b border-gray-200">{booking.checkInDate}</td>
                            <td className="px-4 py-2 border-b border-gray-200">{booking.checkOutDate}</td>
                            <td className="px-4 py-2 border-b border-gray-200">{booking.rooms.map(room => room.roomNumber).join(", ")}</td>
                            <td className="px-4 py-2 border-b border-gray-200">{booking.totalPrice.toLocaleString('vi-VN')}</td>
                            <td className="px-4 py-2 border-b border-gray-200">Thanh toán tại chỗ nghỉ</td>
                            <td className="px-4 py-2 border-b border-gray-200">
                                <span className={`px-2 py-1 rounded text-white ${booking.bookingStatus === 'ACCEPTED' ? 'bg-green-500' : booking.bookingStatus === 'PENDING' ? 'bg-yellow-500' : 'bg-red-500'}`}>
                                    {booking.bookingStatus}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BookingList;