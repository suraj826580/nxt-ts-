"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
const arr = [
  {
    title: "Login",
    link: "/login",
  },
  {
    title: "SignUp",
    link: "/signin",
  },
  {
    title: "Forgot Password",
    link: "/_forgot-password",
  },
];
function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const handleRoutes = (link: string) => {
    router.push(link);
  };

  return (
    <ul
      style={{
        display: "flex",
        gap: "20px",
        listStyle: "none",
        fontWeight: "500",
        justifyContent: "center",
      }}>
      {arr.map((item, index) => {
        const isActive = pathname.startsWith(item.link);
        return (
          <button
            className={isActive ? "font-bold mr-4 " : "text-blue-500 mr-4 "}
            key={index}
            onClick={() => handleRoutes(item.link)}>
            {item.title}
          </button>
        );
      })}
    </ul>
  );
}

export default Navbar;

// use Active link
