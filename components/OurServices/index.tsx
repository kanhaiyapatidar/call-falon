"use client";

import { motion } from "framer-motion";
import React from "react";
import featuresData from "../Features/featuresData";

export default function OurServices() {
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: -20,
        },

        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 1, delay: 0.1 }}
      viewport={{ once: true }}
      className="animate_top py-20"
    >
      <div className="flex flex-wrap justify-center gap-10	">
        {featuresData.map((data, index) => {
          return (
            <div className=" w-[600px]  p-8 servicesDiv">
              <div className="rounded-2 rounded-md h-[300px] overflow-hidden	">
                <img className="w-full rounded-md h-full	" src={data.image} />
              </div>
              <div className="flex justify-center -m-[20px]">
                <div className="bg-yellow-500 z-55 iconDiv p-2 rounded-md">
                <img className="" src={data.icon}/>
                </div>
                </div>
              <div className="py-10 pt-16">
               
                <h1 className="text-[22px] font-bold ">
                    {data.title}
                </h1>
                <p className="pt-10 text-black text-[17px] font-[600]">{data.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
