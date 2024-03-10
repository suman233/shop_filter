import { CategoryRoot } from "@/interface/catresp.interface";
import axiosInstance from "../axiosInstance";
import { endpoints } from "../endpoints";
import { AllCatWiseRoot } from "@/interface/allcat.interface";
import { CatWiseRoot } from "@/interface/products.interface";

export const getCategory = async () => {
  const resp = await axiosInstance.get<CategoryRoot>(endpoints.shops.category);
  console.log("shops", resp);
  return resp?.data;
};

export const getCategoryDetails= async()=>{
  const resp = await axiosInstance.get<AllCatWiseRoot>(
    endpoints.shops.categoryDetails
  )
  console.log('catdetails',resp);
  return resp?.data;
}

export const getCategoryWiseDetails= async()=>{
  const resp = await axiosInstance.get<CatWiseRoot>(
    endpoints.shops.products
  )
  console.log('catwisedetails',resp);
  return resp?.data;
}