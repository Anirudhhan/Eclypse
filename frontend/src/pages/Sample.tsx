import { useEffect } from "react";
import { useProductDetails } from "../store/useProductDetails";

const Sample = () => {
  const { productDetails, getProductDetails } = useProductDetails();

  useEffect(() => {
    getProductDetails();
  }, []);

  if (!productDetails) {
    return <div>Loading product...</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">{productDetails.name}</h1>
      <p className="text-gray-600 mb-2">Price: ${productDetails.price / 100}</p>
      <p className="mb-4">{productDetails.des}</p>

      {productDetails.images && Array.isArray(productDetails.images) && (
        <div className="flex gap-4 mb-6">
          {productDetails.images.map((img, i) => (
            <img
              key={i}
              src={`http://localhost:5001${img}`}
              alt={`Product ${i + 1}`}
              className="w-32 h-32 object-cover rounded border"
            />
          ))}
        </div>
      )}

      {productDetails.video && (
        <video
          src={`http://localhost:5001${productDetails.video}`}
          controls
          className="w-full max-w-xl"
        />
      )}
    </div>
  );
};

export default Sample;