"use client";
import React from "react";
import { useRouter } from "next/navigation";

function ReviewButton({ productID }: { productID: String }) {
  const router = useRouter();
  const navigateFunction = (url: string) => {
    router.push(url);
  };
  return (
    <button
      onClick={() => {
        navigateFunction(`${productID}/review`);
      }}>
      Review Button of this product
    </button>
  );
}

export default React.memo(ReviewButton);
