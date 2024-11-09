import SearchItem from "./SearchItem";
import Navbar from "../../navbar/Navbar.jsx";
import Header from "../../header/Header.jsx";
import Pagination from "./Pagination";

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
          </div>

          <div className="flex flex-col w-4/5 ml-4">
            <div className="w-110">
              <SearchItem />
            </div>

            <div className="flex justify-center items-center mt-4">
              <Pagination />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
