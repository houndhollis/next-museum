"use server";
import { dummyData } from "../mock/data";
import { ParentProductItem } from "../type";

export const getPrefechingData = async (
  id: number
): Promise<ParentProductItem[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filterdData: ParentProductItem[] = dummyData.filter(
        (item) => item.parentId === id
      );
      console.log(filterdData);
      resolve(filterdData);
    }, 1000);
  });
};
