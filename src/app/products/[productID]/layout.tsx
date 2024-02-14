import React from "react";

export const metadata = {
  title: "Product Page",
};

function ProductLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <h2>Featured Products</h2>
    </>
  );
}

export default ProductLayout;
