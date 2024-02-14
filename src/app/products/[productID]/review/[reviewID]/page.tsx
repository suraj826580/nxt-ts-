import React from "react";

interface params {
  productID: String;
  reviewID: String;
}

function SingleReviewID({ params }: { params: params }) {
  const { productID, reviewID } = params;
  return <h1>Review of the product {productID}</h1>;
}

export default SingleReviewID;
