import { useEffect } from "react";
import { useProductDetails } from "../store/useProductDetails";

const ShopPreview = () => {
  const { productDetails, getProductDetails } = useProductDetails();

  useEffect(() => {
    getProductDetails();
  }, []);

  if (!productDetails) {
    return <div></div>;
  }

  return (
    <div className="">
      <div className="md:py-40 py-18 md:mx-10 mx-5">
        <h1 className="md:text-5xl cursor-default font-light">
          {productDetails.name}
        </h1>
      </div>

      <div className="bg-white w-full flex flex-col md:flex-row">
        <div className="md:w-1/2 w-full">
          <video
            // src="/videos/main.mp4"
            src={`${productDetails.video}`}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-60 object-cover md:h-225"
          />
        </div>

        <div className="md:w-1/2 w-full px-4 md:px-10 md:py-12">
          <p className="text-black font-bold w-[80%] md:flex hidden text-sm">
            {productDetails.des}
          </p>
          <div className="flex flex-3 relative gap-4 justify-evenly py-4 md:py-12 border-b border-gray-300">
            <img
              // src="images/img1.jpg"
              src={`${productDetails.images[0]}`}
              className="md:h-50 md:w-50 h-25 w-25 object-cover"
              alt=""
            />
            <img
              // src="images/img2.jpg"
              src={`${productDetails.images[1]}`}
              className="md:h-50 md:w-50 h-25 w-25 object-cover"
              alt=""
            />
            <img
              // src="images/img3.jpg"
              src={`${productDetails.images[2]}`}
              className="md:h-50 md:w-50 h-25 w-25  object-cover"
              alt=""
            />
          </div>
          <div className="md:py-12 py-8 flex relative items-center gap-2">
            <h1 className="text-black md:text-4xl text-3xl font-medium">
              {" "}
              ₹ 7,999
            </h1>
            <p className="text-gray-400 font-light md:text-sm text-xs">
              MRP incl. of all taxes
            </p>
          </div>
          <div className="flex relative text-gray-500 gap-6 items-end md:justify-items-normal justify-between">
            <h1 className="font-medium md:text-xl text-sm">
              Please select a size
            </h1>
            <h1 className="md:text-sm text-xs underline">Size chart</h1>
          </div>
          <div className="md:py-10 py-5 md:gap-6 md:justify-normal justify-evenly w-full flex relative md:border-b border-gray-300 just">
            <p className="text-gray-600 bg-gray-300 md:px-8 md:py-3 px-5 py-2 text-md rounded-sm">
              XS
            </p>
            <p className="text-gray-600 bg-gray-300 md:px-8 md:py-3 px-5 py-2 text-md rounded-sm">
              S
            </p>
            <p className="text-gray-600 bg-gray-300 md:px-8 md:py-3 px-5 py-2 text-md rounded-sm">
              M
            </p>
            <p className="text-gray-600 bg-gray-300 md:px-8 md:py-3 px-5 py-2 text-md rounded-sm">
              L
            </p>
            <p className="text-gray-600 bg-gray-300 md:px-8 md:py-3 px-5 py-2 text-md rounded-sm">
              XL
            </p>
          </div>
          <div className="md:mt-20 mt-8 mb-10 md:mb-0 flex flex-col md:flex-row gap-6">
            <button className="text-black text-xl font-medium border-2 border-gray-400 py-4 px-8 rounded-lg">
              Add to Cart
            </button>
            <button className="bg-black text-xl font-medium hover:bg-red-500 py-4 md:px-48 rounded-lg duration-300 cursor-pointer">
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPreview;
