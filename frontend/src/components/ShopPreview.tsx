import { useEffect } from "react";
import { useProductDetails } from "../store/useProductDetails";

const ShopPreview = () => {
  const { productDetails, getProductDetails } = useProductDetails();

  useEffect(() => {
    getProductDetails();
  }, []);

  if (!productDetails) {
    return <div>Loading product...</div>;
  }

  return (
    <div className="">
      <div className="sm:py-40 py-18 sm:mx-10 mx-5">
        <h1 className="sm:text-5xl cursor-default font-light">
          {productDetails.name}
        </h1>
      </div>

      <div className="bg-white w-full flex flex-col sm:flex-row">
        <div className="sm:w-1/2 w-full">
          <video
            src={`http://localhost:5001${productDetails.video}`}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-60 object-cover sm:h-225"
          />
        </div>

        <div className="sm:w-1/2 w-full px-4 sm:px-10 sm:py-12">
          <p className="text-black font-bold w-[80%] sm:flex hidden text-sm">
            {productDetails.des}
          </p>
          <div className="flex flex-3 relative gap-4 justify-evenly py-4 sm:py-12 border-b border-gray-300">
            <img
              src={`http://localhost:5001${productDetails.images[0]}`}
              className="sm:h-50 sm:w-50 h-30 w-30 object-cover"
              alt=""
            />
            <img
              src={`http://localhost:5001${productDetails.images[1]}`}
              className="sm:h-50 sm:w-50 h-30 w-30 object-cover"
              alt=""
            />
            <img
              src={`http://localhost:5001${productDetails.images[2]}`}
              className="sm:h-50 sm:w-50 h-30 w-30  object-cover"
              alt=""
            />
          </div>
          <div className="sm:py-12 py-8 flex relative items-center gap-2">
            <h1 className="text-black sm:text-4xl text-3xl font-medium"> ₹ 7,999</h1>
            <p className="text-gray-400 font-light sm:text-sm text-xs">
              MRP incl. of all taxes
            </p>
          </div>
          <div className="flex relative text-gray-500 gap-6 items-end sm:justify-items-normal justify-between">
            <h1 className="font-medium sm:text-xl text-sm">
              Please select a size
            </h1>
            <h1 className="sm:text-sm text-xs underline">Size chart</h1>
          </div>
          <div className="sm:py-10 py-5 sm:gap-6 sm:justify-normal justify-evenly w-full flex relative sm:border-b border-gray-300 just">
            <p className="text-gray-600 bg-gray-300 sm:px-8 sm:py-3 px-5 py-2 text-md rounded-sm">
              XS
            </p>
            <p className="text-gray-600 bg-gray-300 sm:px-8 sm:py-3 px-5 py-2 text-md rounded-sm">
              S
            </p>
            <p className="text-gray-600 bg-gray-300 sm:px-8 sm:py-3 px-5 py-2 text-md rounded-sm">
              M
            </p>
            <p className="text-gray-600 bg-gray-300 sm:px-8 sm:py-3 px-5 py-2 text-md rounded-sm">
              L
            </p>
            <p className="text-gray-600 bg-gray-300 sm:px-8 sm:py-3 px-5 py-2 text-md rounded-sm">
              XL
            </p>
          </div>
          <div className="sm:mt-20 mt-8 mb-10 sm:mb-0 flex flex-col sm:flex-row gap-6">
            <button className="text-black text-xl font-medium border-2 border-gray-400 py-4 px-8 rounded-lg">
              Add to Cart
            </button>
            <button className="bg-black text-xl font-medium hover:bg-red-500 py-4 sm:px-48 rounded-lg duration-300 cursor-pointer">
              Buy
            </button>
          </div>
        </div>
      </div>

      {/* <img src={`http://localhost:5001${productDetails.images[0]}`} alt="" />

        <video
          src={`http://localhost:5001${productDetails.video}`}
          controls
          className="w-full max-w-xl"
        /> */}
    </div>
  );
};

export default ShopPreview;
