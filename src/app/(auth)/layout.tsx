import Navbar from "@/components/Navbar/Navbar";
import { Metadata } from "next";

export const metaDataGenerator = (): Metadata => {
  return {
    title: "Auth",
  };
};

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
export default AuthLayout;
