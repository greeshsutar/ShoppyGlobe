import { useState } from "react";
import UseApi from "./UseApi";
import Productitem from "./Productitem";

const Home = () => {
  const fetchdata = UseApi();

  const [inputdata, setinputdata] = useState("");
  const [datafilter, setdatafilter] = useState([]);

  function handleinput(searchText) {
    setinputdata(searchText);

    if (!searchText) {
      setdatafilter([]);
      return;
    }

    const filtered = fetchdata.filter((item) =>
      item.title.toLowerCase().includes(searchText.toLowerCase())
    );

    setdatafilter(filtered);
  }

  return (
    <div>
      {/* Search */}
   <div className="relative w-full max-w-md mx-auto mb-4 px-4 sm:px-0">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          🔍
        </span>

        <input
          value={inputdata}
          type="search"
          placeholder="Search products..."
          onChange={(e) => handleinput(e.target.value)}
          className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white"
        />
      </div>

      {/* Product List */}
      <Productitem
        fetchdata={fetchdata}
        datafilter={datafilter}
      />
    </div>
  );
};

export default Home;