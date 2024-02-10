"use client";
import React from "react";
import featuresData from "./featuresData";
import SingleFeature from "./SingleFeature";
import SectionHeader from "../Common/SectionHeader";

const Feature = () => {
  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      <section  className="py-15 lg:py-15 xl:py-15  " style={{backgroundColor:'rgb(116 137 25 / 30%)'}}>
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: "Our Services",
              subtitle:'',
              description: `At Falon Sourcing Solutions LLC, we take pride to provide our customers high quality services personalized for their unique needs. We are available for face to face appointments, during our business hours and and Saturdays by appointment. Our staff members are professional, courteous and efficient.`,
            }}
          />
          {/* <!-- Section Title End --> */}

          <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-y-15.5 xl:gap-x-10.5	">
            {/* <!-- Features item Start --> */}

            {featuresData.map((feature, key) => (
              <SingleFeature feature={feature} key={key} />
            ))}
            {/* <!-- Features item End --> */}
          </div>
            <div className="text-center pt-20"><button style={{backgroundColor:'rgb(230 217 90)'}} className=" h-[40px] w-[150px] rounded text-black font-[600] text-[17px]">  Learn More</button></div>
        </div>
      </section>

      {/* <!-- ===== Features End ===== --> */}
    </>
  );
};

export default Feature;
