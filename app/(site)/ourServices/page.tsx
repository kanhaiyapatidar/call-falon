import React from "react";
import { Metadata } from "next";
import Feature from "@/components/Features";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "This is contact page ",
  // other metadata
};

const ourServicesPage = () => {
  return (
    <div className="pb-20 pt-20">
<Feature/>
    </div>
  );
};

export default ourServicesPage;
