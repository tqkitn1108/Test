import SearchItem from "./SearchItem";
import Navbar from "../../navbar/Navbar.jsx";
import Header from "../../header/Header.jsx";

const List = () => {
  return (
    <div className="list_hotels">
      <Navbar />
      <Header showTitle={false} />

      <div className="flex justify-center">
        <div className="flex max-w-[1100px] w-full mt-[60px]">
          <div className="max-w-[25%]">
            <div className="w-[221px] flex justify-end mt-[-0.8px] text-sm">
              <div className="flex-1 p-2.5 bg-white sticky border border-gray-300 w-full">
                <h2 className="text-lg">Chọn lọc theo:</h2>
              </div>
            </div>
            {/* <div className="listWrapper">
                        <div className="listSearch">
                            <h3 className="lsTitle">Ngân sách tối đa của bạn (mỗi đêm)</h3>
                            <div>
                                <label htmlFor="filterRange">VND {(rangeValue).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</label>
                                <input type="range" id="filterRange" name="filterRange" min="0" max="4000000" value={rangeValue} onChange={handleRangeChange} />
                            </div>
                        </div>
                    </div> */}
          </div>
          <div className="flex w-4/5 justify-center ml-4">
              <div className="w-110">
                  <SearchItem />
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
