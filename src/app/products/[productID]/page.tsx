import ReviewButton from "@/components/ReviewButton";
import React from "react";
interface params {
  productID: String;
}
function Product({ params }: { params: params }) {
  const { productID } = params;
  return (
    <>
      <h1>Product {params.productID} Details</h1>
      <ReviewButton productID={productID} />
    </>
  );
}

export default Product;
