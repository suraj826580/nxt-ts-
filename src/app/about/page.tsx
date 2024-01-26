import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: {
    default: "About Page",
  },
  description: "For optimisation",
};

function About() {
  return <h1>About</h1>;
}

export default About;
