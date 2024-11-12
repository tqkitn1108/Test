const Home = () => {
  return (
    <div className="home flex">
      <div className="homeContainer flex-[6]">
        <div className="widgets flex gap-5 p-5"></div>
        <div className="charts px-5 py-[5px]"></div>
        <div className="listContainer shadow-[2px_4px_10px_1px_rgba(201,201,201,0.47)] p-5 m-5">
          <div className="listTitle font-medium text-gray-500 mb-3">
            Latest Transactions
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
