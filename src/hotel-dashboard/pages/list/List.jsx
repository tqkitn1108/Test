import { useLocation } from "react-router-dom"

const List = ({ columns, hideSideBar }) => {
  let isHotelList = false;
  let isRoomList = false;
  let isPendingList = false;
  let isBookingList = false;
  const location = useLocation();
  const path = location.pathname;

  if (path.endsWith("hotels")) isHotelList = true;
  else if (path.endsWith("rooms")) isRoomList = true;
  else if (path.endsWith("pending")) isPendingList = true;
  else if (path.endsWith("bookings")) isBookingList = true;
  return (
    <div className="list flex w-full">
      <div className="listContainer flex-[6]">
        {isHotelList}
        {isRoomList}
        {isPendingList}
        {isBookingList && (
          <div className="single">
            <div className="singleContainer">
              <div className="bottom">
                <h1 className="title">Các đặt phòng mới nhất</h1>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default List