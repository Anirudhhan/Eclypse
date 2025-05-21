// store/useProductDetails.ts
import { create } from "zustand";
import { axiosInstance } from "../lib/axios";

type Product = {
  id: string;
  name: string;
  price: number;
  images: string[];
  video: string;
  des: string; 
};

interface ProductDetailsStore {
  productDetails: Product | null;
  getProductDetails: () => Promise<void>;
}

export const useProductDetails = create<ProductDetailsStore>((set) => ({
  productDetails: null,

  getProductDetails: async () => {
    try {
      const res = await axiosInstance.get<Product>("/product");
      set({ productDetails: res.data });
    } catch (error: any) {
      console.log(error?.response?.data?.message || "An error occurred");
    }
  },
}));
