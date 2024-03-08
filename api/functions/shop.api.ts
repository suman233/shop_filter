import { CategoryRoot } from "@/interface/catresp.interface";
import axiosInstance from "../axiosInstance";
import { endpoints } from "../endpoints";

export const getCategory = async () => {
  const resp = await axiosInstance.get<CategoryRoot>(endpoints.shops.category);
  console.log("shops", resp);
  return resp?.data;
};
