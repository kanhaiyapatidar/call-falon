import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "This is contact page ",
  // other metadata
};

const SupportPage = () => {
  return (
    <div className="pb-20 pt-20">
      <Contact />
    </div>
  );
};

export default SupportPage;
