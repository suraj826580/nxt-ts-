"use client";
import ReviewButton from "@/components/ReviewButton";
import { Metadata } from "next";
import { useParams } from "next/navigation";
import React from "react";

interface params {
  productID: String;
}

type props = {
  params: {
    productID: String;
  };
};
export const generateMetaData = ({ params }: props): Metadata => {
  return {
    title: `productID ${params.productID}`,
  };
};
// above code is mpt  working i am trying to create a dynamic metadata

function Product({ params }: { params: params }) {
  const { productID } = params;
  const paramsnew = useParams();
  console.log(paramsnew);
  return (
    <>
      <h1>Product {params.productID} Details</h1>
      <ReviewButton productID={productID} />
    </>
  );
}

export default Product;
// ---------------------------------
