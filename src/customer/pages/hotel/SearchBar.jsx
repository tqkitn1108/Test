import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from 'date-fns';
import { vi } from 'date-fns/locale';
import { useState, useEffect, useRef } from "react";
import 'tippy.js/dist/tippy.css';
import { useLocation, useNavigate } from "react-router-dom";

function SearchBar({ setShowRooms }) {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const [defaultText, setDefaultText] = useState(true);
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    if (defaultText) {
      setOpenDate(true);
    } else {
      const checkIn = format(date[0].startDate, 'yyyy-MM-dd');
      const checkOut = format(date[0].endDate, 'yyyy-MM-dd');
      searchParams.set('checkIn', checkIn);
      searchParams.set('checkOut', checkOut);
      searchParams.set('adults', options.adult);
      searchParams.set('children', options.children);
      searchParams.set('noRooms', options.room);
      navigate({ search: `?${searchParams.toString()}` });
      setShowRooms(true);
    }
  };

  useEffect(() => {
    if (searchParams.get('checkIn')) {
      setDefaultText(false);
      setDate([{
        startDate: new Date(searchParams.get('checkIn')),
        endDate: new Date(searchParams.get('checkOut')),
        key: 'selection'
      }]);
    }
    setOptions({
      adult: parseInt(searchParams.get('adults')) || 2,
      children: parseInt(searchParams.get('children')) || 0,
      room: parseInt(searchParams.get('noRooms')) || 1,
    })
  }, []);

  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  const handleDateChange = (item) => {
    setDate([item.selection]);
    setDefaultText(false);
  };

  const componentRef = useRef(null);
  const componentRef2 = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (componentRef.current && !componentRef.current.contains(event.target)) {
        setOpenDate(false);
      }
      if (componentRef2.current && !componentRef2.current.contains(event.target)) {
        setOpenOptions(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 2,
    children: 0,
    room: 1,
  });

  const handleOption = (event, name, operation) => {
    event.preventDefault();
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1
      };
    });
  };

  return (
    <form className="flex gap-4 p-4 bg-white shadow-lg rounded-lg" onSubmit={handleSearch}>
      <div className="relative flex items-center" ref={componentRef}>
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setOpenDate(!openDate)}>
          <span className="text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24">
              <path d="M22.5 13.5v8.25a.75.75 0 0 1-.75.75H2.25a.75.75 0 0 1-.75-.75V5.25a.75.75 0 0 1 .75-.75h19.5a.75.75 0 0 1 .75.75v8.25zm1.5 0V5.25A2.25 2.25 0 0 0 21.75 3H2.25A2.25 2.25 0 0 0 0 5.25v16.5A2.25 2.25 0 0 0 2.25 24h19.5A2.25 2.25 0 0 0 24 21.75V13.5z"></path>
            </svg>
          </span>
          <span className="text-gray-700">
            {defaultText ? "Ngày nhận phòng - Ngày trả phòng" : `${format(date[0].startDate, "EEE, dd/MM/yyyy", { locale: vi })} - ${format(date[0].endDate, "EEE, dd/MM/yyyy", { locale: vi })}`}
          </span>
        </div>
        {openDate && (
          <DateRange
            editableDateInputs={true}
            onChange={handleDateChange}
            moveRangeOnFirstSelection={false}
            ranges={date}
            className="absolute top-12 bg-white shadow-lg rounded-lg z-10"
            minDate={new Date()}
          />
        )}
      </div>

      <div className="relative flex items-center" ref={componentRef2}>
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setOpenOptions(!openOptions)}>
          <span className="text-gray-600">
            <FontAwesomeIcon icon={faChevronDown} />
          </span>
          <span className="text-gray-700">
            {`${options.adult} người lớn - ${options.children} trẻ em - ${options.room} phòng`}
          </span>
        </div>
        {openOptions && (
          <div className="absolute top-12 bg-white shadow-lg rounded-lg p-4 z-10 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Người lớn</span>
              <div className="flex items-center space-x-2">
                <button className="text-gray-500 px-2 py-1 rounded" disabled={options.adult <= 1} onClick={(event) => handleOption(event, "adult", "d")}>-</button>
                <span className="text-gray-700">{options.adult}</span>
                <button className="text-gray-500 px-2 py-1 rounded" onClick={(event) => handleOption(event, "adult", "i")}>+</button>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Trẻ em</span>
              <div className="flex items-center space-x-2">
                <button className="text-gray-500 px-2 py-1 rounded" disabled={options.children <= 0} onClick={(event) => handleOption(event, "children", "d")}>-</button>
                <span className="text-gray-700">{options.children}</span>
                <button className="text-gray-500 px-2 py-1 rounded" onClick={(event) => handleOption(event, "children", "i")}>+</button>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Phòng</span>
              <div className="flex items-center space-x-2">
                <button className="text-gray-500 px-2 py-1 rounded" disabled={options.room <= 1} onClick={(event) => handleOption(event, "room", "d")}>-</button>
                <span className="text-gray-700">{options.room}</span>
                <button className="text-gray-500 px-2 py-1 rounded" onClick={(event) => handleOption(event, "room", "i")}>+</button>
              </div>
            </div>
            <button className="text-blue-600 mt-4" onClick={() => setOpenOptions(false)}>Xong</button>
          </div>
        )}
      </div>

      <button className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow">Tìm kiếm</button>
    </form>
  );
}

export default SearchBar;
