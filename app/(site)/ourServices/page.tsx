import React from "react";
import { Metadata } from "next";
import OurServices from "@/components/OurServices";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "This is contact page ",
  // other metadata
};

const ourServicesPage = () => {
  return (
    <div className="pb-20 pt-20">
<OurServices/>
    </div>
  );
};

export default ourServicesPage;
