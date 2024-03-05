import React from "react";
import { Metadata } from "next";
import ContractingVehicles from "@/components/ContractingVehicles";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "This is contact page ",
  // other metadata
};

const contractingVehicles = () => {
  return (
    <div className="pb-5 pt-5 lg:h-[66vh] h-full">
<ContractingVehicles/>
    </div>
  );
};

export default contractingVehicles;
