import { useContext, useState } from "react";
import { ImageContext } from "../App";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const { fetchData, setSearchImage } = useContext(ImageContext);

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
    setPageValue(1);
  };
  const handleButtonSearch = () => {
    fetchData(
      `search/photos?page=${pageValue}&query=${searchValue}&client_id=${process.env.REACT_APP_ACCESS_KEY}`
    );
    // setSearchValue("");
    setSearchImage(searchValue);
  };
  const handleEnterSearch = (e) => {
    if (e.key === "Enter") {
      fetchData(
        `search/photos?page=${pageValue}&query=${searchValue}&client_id=${process.env.REACT_APP_ACCESS_KEY}`
      );
      // setSearchValue("");
      setSearchImage(searchValue);
    }
  };
  const [pageValue, setPageValue] = useState(1);

  const handlePrev = () => {
    console.log("prev");
    setPageValue(pageValue - 1);
    fetchData(
      `search/photos?page=${pageValue - 1}&query=${searchValue}&client_id=${
        process.env.REACT_APP_ACCESS_KEY
      }`
    );
    // setSearchValue("");
    setSearchImage(searchValue);
  };
  const handleNext = () => {
    console.log("next");
    setPageValue(pageValue + 1);
    fetchData(
      `search/photos?page=${pageValue + 1}&query=${searchValue}&client_id=${
        process.env.REACT_APP_ACCESS_KEY
      }`
    );
    // setSearchValue("");
    setSearchImage(searchValue);
  };

  return (
    <>
      <div className="flex">
        <input
          className="bg-gray-50 border border-gray-300 text-sm w-full indent-2 p-2.5 outline-none focus:border-blue-500 focus:ring-2 rounded-tl rounded-bl"
          type="search"
          placeholder="Search Anything..."
          value={searchValue}
          onChange={handleInputChange}
          onKeyDown={handleEnterSearch}
        />
        <button
          onClick={handleButtonSearch}
          disabled={!searchValue}
          className="bg-blue-600 px-6 py-2.5 text-white rounded-tr rounded-br focus:ring-2 focus:ring-blue-300 disabled:bg-gray-400"
        >
          Search
        </button>
      </div>
      <div className="mx-auto max-w-2xl py-8 px-4 sm:py-14 sm:px-6 lg:max-w-7xl lg:px-8">
        <div class=" flex justify-between">
          <button
            class="bg-gray-300 hover:bg-lime-400 text-gray-800 font-bold py-2 px-4 rounded-l disabled:bg-red-300"
            onClick={handlePrev}
            disabled={pageValue <= 1 || !searchValue}
          >
            &larr; Prev
          </button>
          <button
            class="bg-gray-300 hover:bg-lime-400 text-gray-800 font-bold py-2 px-4 rounded-r disabled:bg-red-300"
            onClick={handleNext}
            disabled={!searchValue}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    </>
  );
};

export default Search;
