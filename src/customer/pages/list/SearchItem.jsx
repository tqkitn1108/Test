import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const SearchItem = () => {
  const renderStars = (value) => {
    const stars = [];
    if (value > 0) {
      for (let i = 0; i < value; i++) {
        stars.push(
          <span key={i} className="text-yellow-500">
            &#9733;
          </span>
        );
      }
    }
    return stars;
  };

  return (
    <div className="border border-gray-300 p-2.5 rounded-md flex justify-between gap-5 mb-5 w-full bg-[#f2f9fa]">
      <img
        src=""
        alt="Nhà của Khoa"
        className="w-48 h-48 object-cover"
      />
      <div className="flex flex-col gap-2.5 flex-2">
        <div className="inline-flex items-center">
          <h1 className="text-2xl text-[#0071c2]">Nhà của Khoa</h1>
          <div className="ml-2.5 flex">{renderStars(5)}</div>
        </div>
        <div className="text-xs mt-[-2.5px] mb-2.5 inline-block font-semibold">
          <a
            href={`https://maps.app.goo.gl/nmBqX3VKRa1ZcKzn6`}
            target="_blank"
            rel="noopener noreferrer"
            className="mr-5"
          >
            72 Nguyễn Phúc Lai, Ô chợ Dừa, Đống Đa, Hà Nội
          </a>
          <a
            href={`https://maps.app.goo.gl/nmBqX3VKRa1ZcKzn6`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Xem trên bản đồ
          </a>
        </div>
        <span className="text-sm line-clamp-3 overflow-hidden break-words">
          Nằm ở thành phố Hà Nội, cách Bảo tàng Mỹ thuật Việt Nam 1,9 km, Nesta
          Hotel & Spa cung cấp chỗ nghỉ với xe đạp cho khách sử dụng miễn phí,
          chỗ đỗ xe riêng, khu vườn và sân hiên. Trong số các tiện nghi của chỗ
          nghỉ này có nhà hàng, dịch vụ phòng, lễ tân 24 giờ và WiFi miễn phí
          trong toàn bộ khuôn viên. Du khách có thể nhâm nhi đồ uống tại quầy
          bar. Khách sạn cung cấp phòng nghỉ gắn máy điều hòa với bàn làm việc,
          két an toàn, TV màn hình phẳng và phòng tắm riêng đi kèm vòi xịt/chậu
          rửa vệ sinh. Tất cả các phòng nghỉ đều được trang bị tủ để quần áo.
          Khách nghỉ tại Nesta Hotel & Spa có thể thưởng thức bữa sáng buffet
          hoặc bữa sáng à la carte. Chỗ nghỉ nằm cách Văn Miếu - Quốc Tử Giám
          1,7 km và trung tâm thương mại Vincom Center Nguyễn Chí Thanh 2,5 km.
          Sân bay gần nhất là sân bay quốc tế Nội Bài, cách Nesta Hotel & Spa 26
          km.
        </span>
        <span className="text-xs text-[#008009] font-bold">
          <FontAwesomeIcon icon={faCheck} className="mr-2 text-base" />
          Chỉ còn 5 phòng trống
        </span>
        <span className="text-xs text-[#008009] font-bold">
          <FontAwesomeIcon icon={faCheck} className="mr-2 text-base" />
          Miễn phí hủy phòng
        </span>
        <span className="text-xs text-[#008009]">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="flex-1 flex flex-col justify-between max-w-[130px] relative">
        <div className="flex justify-end mr-[7px] max-w-[110px] ml-3.5 font-medium">
          <span className="float-right mr-2.5 text-sm whitespace-nowrap">
            Tốt
          </span>
          <button className="bg-[#0a4fb0] text-white px-1.5 font-bold rounded-md rounded-br-none shadow-lg">
            5.0
          </button>
        </div>
        <div className="text-right flex flex-col gap-1.5">
          <span className="text-lg">Giá 1 đêm</span>
          <span className="text-base font-semibold text-[#0071c2]">
            1000000 VND
          </span>
          <span className="text-xs text-gray-500 whitespace-nowrap">
            Includes taxes and fees
          </span>
          <button className="bg-[#0071c2] text-white font-bold text-sm px-2.5 py-2 rounded-md max-w-[150px] cursor-pointer whitespace-nowrap">
            See availability
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
