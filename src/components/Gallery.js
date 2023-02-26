import { useContext } from "react";
import { ImageContext } from "../App";
import Base from "./Base";
import Image from "./Image";

const Gallery = () => {
  const { response, isLoading, searchImage } = useContext(ImageContext);

  return (
    <>
      <h1 className="text-center text-3xl font-semibold leading-loose text-gray-900 dark:text-blue-600">
        Results For {searchImage || ""}
      </h1>
      <div className="mt-6 grid grid-cols-1 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-6">
        {isLoading ? (
          <Base item={10} />
        ) : (
          response.map((data, key) => <Image key={key} data={data} />)
        )}
      </div>
    </>
  );
};

export default Gallery;
