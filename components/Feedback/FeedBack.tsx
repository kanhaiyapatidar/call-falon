"use client";

import React ,{useState,useRef,useEffect}from 'react'
import { motion } from "framer-motion"; 

export default function FeedBack() {
  const [currentImage, setCurrentImage] = useState(0);
  const carouselRef = useRef(null);
const data = [

  {
    feedbackTitle:'Secret to our success is our customers loyalty',
    feedback: '"Excellent service all the way around from start to finish. Keep up the GREAT work!"',
    customerName: 'Ralph B. Cooper Executive Director, Publishing Services & Fulfillment '
  },
  {
    feedbackTitle:'Secret to our success is our customers loyalty',
    feedback: '"Excellent service all cscsscscsc the way around from start to finish. Keep up the GREAT work! scsfsasaf savagsv"',
    customerName: 'Customer Name'
  }

]
   
console.log(currentImage,"WDwdw");

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentImage((prevData) => (prevData + 1) % data.length);
  }, 2000);

  return () => clearInterval(interval);
}, [data.length]);

  return (
    <motion.div
    variants={{
      hidden: {
        opacity: 0,
        y: 0,
      },

      visible: {
        opacity: 1,
        y: -20,
      },
    }}
    initial="hidden"
    whileInView="visible"
    transition={{ duration: 1, delay: 0.1 }}
    viewport={{ once: true }}
    className='flex justify-center items-center pt-[3rem]'
    >

        <div className='w-[100%] flex justify-center marquee' >
          <div className='w-[80%] flex  overflow-hidden   	'  ref={carouselRef} 
          style={{ border: "2px solid rgb(77 125 56 )", borderRadius: "15px" }}>        
            {data.map((e ,index)=>{
              return  (

             <>
             <div  key={index} className='bg-gray-200 h-[150px] min-w-[100%] px-[40px]  rounded-2xl flex justify-center items-center flex-col text-center gap-[10px]'>
              <h1 className='text-[20px] font-[800] '>{data[currentImage].feedbackTitle}</h1>
            <span className='text-[19px] text-black italic	 '>{data[currentImage].feedback}</span> 
            <p className='text-black font-bold'>{e.customerName}</p>
            </div>
            </>
              )
            })}
            </div>
         
          </div>
    </motion.div>
  )
}


