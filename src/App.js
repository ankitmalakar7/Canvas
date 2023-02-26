// import logo from "./logo.svg";
import "./App.css";
import { createContext, useState } from "react";
import Jumbotron from "./components/Jumbotron";
import useAxios from "./hooks/useAxios";
import Gallery from "./components/Gallery";
import Search from "./components/Search";

export const ImageContext = createContext();
function App() {
  const [searchImage, setSearchImage] = useState("");
  const { response, isLoading, error, fetchData } = useAxios(
    `search/photos?page=1&query=&client_id=${process.env.REACT_APP_ACCESS_KEY}`
  );

  const value = {
    response,
    isLoading,
    error,
    fetchData,
    searchImage,
    setSearchImage,
  };
  return (
    <ImageContext.Provider value={value}>
      <Jumbotron>
        <Search />
      </Jumbotron>
      <Gallery />
    </ImageContext.Provider>
  );
}

export default App;
