import Link from "next/link";
import React from "react";

function AboutParenthesis() {
  return (
    <div>
      If you want to group your routes then use can use parenthesis (foldername)
      <Link
        href={
          "https://nextjs.org/docs/app/building-your-application/routing/route-groups"
        }>
        Visit Route Group
      </Link>
    </div>
  );
}

export default AboutParenthesis;
