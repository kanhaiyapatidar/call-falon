"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";
import { useEffect, useRef } from 'react';

const About = () => {

  const logos = [
    { imageUrl: "/images/about/logo/1.dol logo.png" },
    {  imageUrl: '/images/about/logo/2.doi logo.png' },
    {  imageUrl: '/images/about/logo/3.faa logo.png' },
    {  imageUrl: '/images/about/logo/4.Fema logo.png' },
    {  imageUrl: "/images/about/logo/5.fema logo ii.jpg" },
    {  imageUrl: '/images/about/logo/6.ssa logo.png' },
    { imageUrl: '/images/about/logo/7gao logo i.png' },
    {  imageUrl: '/images/about/logo/8.goldman sach alumni.png' },
    {  imageUrl: '/images/about/logo/9.loc logo.png' },
    {  imageUrl: '/images/about/logo/10.hud logo.jpg'},
    {  imageUrl: '/images/about/logo/11.gsa advantage finger pointing - Copy.jpg'},
    {  imageUrl: '/images/about/logo/12.gpo logo i.png'},
    {  imageUrl: '/images/about/logo/13.NEA.png'},
    {  imageUrl: '/images/about/logo/14.sbsd.jpg'},
    {  imageUrl: '/images/about/logo/15.us courts logo.jpg'},
    {  imageUrl: '/images/about/logo/16.uspto.png'},
    {  imageUrl: '/images/about/logo/17.WKC logo.png'},
    {  imageUrl: '/images/about/logo/18.swam logo ii.jpeg'},
    {  imageUrl: '/images/about/logo/19.NVFS-Web-Logo-0927.png'},
    {  imageUrl: '/images/about/logo/20.VA logo.jpg'},

  ];
 

  return (
    <>
   <div >

      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: 0,
          },

          visible: {
            opacity: 1,
            y: -10,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="flex  justify-center px-[0px] sm:px-[18px] pt-[150px] pb-[80px] lg:flex-row flex-col-reverse gap-y-[40px]"
      >
        <div className="flex w-full lg:w-[50%]  flex-col items-center	justify-center  ">
          <img
            loading="lazy"
            decoding="async"
            width="700"
            height="600"
            src="/images/about/aboutUs.PNG"
            alt=""
            title=""
            className="h-[80%] w-[80%] rounded-[10px] 	"
            style={{
              boxShadow: "0px 2px 18px 0px rgba(0,0,0,0.3)",
              position: "relative",
            }}
          />
        </div>
        <div className="h-[100%] w-full lg:w-[50%] flex justify-center lg:px-[0px] px-[20px]">
          <div className="w-[90%]">
            <h2 className="decoration-[rgb(235	 225 123)]	text-[35px] tracking-[1px] underline	decoration-2	underline-offset-[5px]	">
              About Company
            </h2>
            <h1 className="pt-[40px] text-[40px] font-[700] text-black">
              We’re More than a Industrial Company
            </h1>
            <p className="pt-[20px] font-[600] 	tracking-[0.5px] text-green-800 mr-8">
              Falon recognizes that its staff and clients are its most important
              assets and that the effectiveness of the organization depends on
              the accumulated contributions of its individual employees. Falon
              has a strong belief in people and a respect for relationships,
              both internal and external, an approach that has been successful
              in building and delivering cohesive on-site program support teams.{" "}
            </p>

            <div className="pt-[10px] text-[17px] text-black mr-8">
              Falon has over 35 years of experience in Mail Management,
              Facilities Support Services and Instructional
              Design/Implementation with this knowledge we are able to offer our
              clients innovative cost reducing solutions.{" "}
            </div>
            <ul className="pt-[20px] text-black">
              <li className="flex items-center gap-3 ">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.5em"
                    height="1.5em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="rgb(108 133 17)"
                      fill-rule="evenodd"
                      d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m-.232-5.36l5-6l-1.536-1.28l-4.3 5.159l-2.225-2.226l-1.414 1.414l3 3l.774.774z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>{" "}
                <div>Federal, State and Local Governments</div>
              </li>
              <li className="flex items-center gap-3 ">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.5em"
                    height="1.5em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="rgb(108 133 17)"
                      fill-rule="evenodd"
                      d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m-.232-5.36l5-6l-1.536-1.28l-4.3 5.159l-2.225-2.226l-1.414 1.414l3 3l.774.774z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>{" "}
                <div>Corporations</div>
              </li>
              <li className="flex items-center gap-3 ">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.5em"
                    height="1.5em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="rgb(108 133 17)"
                      fill-rule="evenodd"
                      d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m-.232-5.36l5-6l-1.536-1.28l-4.3 5.159l-2.225-2.226l-1.414 1.414l3 3l.774.774z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>{" "}
                <div>Associations and other Non-Profit Organizations</div>
              </li>
              <li className="flex items-center gap-3 ">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.5em"
                    height="1.5em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="rgb(108 133 17)"
                      fill-rule="evenodd"
                      d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m-.232-5.36l5-6l-1.536-1.28l-4.3 5.159l-2.225-2.226l-1.414 1.414l3 3l.774.774z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>{" "}
                <div>Graduate of the Goldman Sachs 10K Businesses program</div>
              </li>
              <li className="flex items-center gap-3 ">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.5em"
                    height="1.5em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="rgb(108 133 17)"
                      fill-rule="evenodd"
                      d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m-.232-5.36l5-6l-1.536-1.28l-4.3 5.159l-2.225-2.226l-1.414 1.414l3 3l.774.774z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>{" "}
                <div>Graduate of the State of Virginia - Scaling for Growth Program</div>
              </li>
              <li className="flex items-center gap-3 ">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.5em"
                    height="1.5em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="rgb(108 133 17)"
                      fill-rule="evenodd"
                      d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m-.232-5.36l5-6l-1.536-1.28l-4.3 5.159l-2.225-2.226l-1.414 1.414l3 3l.774.774z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>{" "}
                <div>Member of the National Association of Credit Counselors</div>
              </li>
              <li className="flex items-center gap-3 ">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.5em"
                    height="1.5em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="rgb(108 133 17)"
                      fill-rule="evenodd"
                      d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m-.232-5.36l5-6l-1.536-1.28l-4.3 5.159l-2.225-2.226l-1.414 1.414l3 3l.774.774z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>{" "}
                <div>Proud sponsor of the Northern Virginia Family Service - SERVE Campus</div>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: 0,
          },

          visible: {
            opacity: 1,
            y: -10,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}

        className="flex  justify-center  gap-[120px] px-[0px] sm:px-[18px] py-[10px] pb-[100px]"
      >
        <div className="w-[80%] rounded-2xl bg-white	p-[40px] shadow-xl" style={{ border: ' 2px solid rgb(77 125 56 )' }}>


          <div className="">


            <p className=" text-[18px] text-black">
              "To achieve excellence in performance and attain customer service goals, Falon applies an interactive approach to staff management that is most effective when it is based on shared values and expectations. Through fostering a flexible work force within a healthy work place, high-quality service is consistently delivered to Falon's contracts. A work environment that encourages open communication, prizes fairness, recognizes quality work, and respects the differences and rights of all individuals ultimately yields optimal staff health and performance."
            </p>

          </div>
        </div>
      </motion.div>
      <section 
       style={{ padding: "2px", paddingTop:'25px' ,backgroundColor: "rgb(234 229 229 / 44%)" }}>
     

      <div className="flex justify-center items-center  px-5 lg:px-24 gap-5 lg:gap-15 flex-wrap	">
      {logos.map((logo, index) => (
           
              <div >
                <img
                  src={logo.imageUrl}
                  className="w-24 sm:w-28 lg:w-40 h-auto max-h-40 object-cover shadow-xl  "
                  alt={`Logo ${index}`}
                  style={{ margin: "10px", cursor: 'pointer' }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
            
          ))}
      </div>
    </section>
      <div
        
      
        className="flex justify-center gap-[120px] flex-col lg:flex-row p-[0px] sm:px-[18px] py-[70px]"
        style={{ backgroundColor: "rgb(234 229 229 / 44%)" }}
      >

        <div className="flex w-full lg:w-[50%] flex-col items-center lg:items-end justify-center">
          <div className="aboutBox box w-[80%] border-2 p-[25px] shadow-xl" style={{ border: "2px solid green", borderRadius: "15px" }}>

            <h1 className="pt-[40px] text-[20px] font-[700] text-black">
              Falon holds a GSA Schedule 36 "GS-03F-072CA" Contract in Facility
              Support Management, Presortation of Mail & Other Mail Related
              Services. Falon's government activities include but are not
              limited to the following NAICS codes:
            </h1>

            <ul className="flex flex-col gap-[10px] pt-[20px] text-[17px] text-black">
              <li className="flex items-center gap-3 ">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.5em"
                    height="1.5em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="rgb(108 133 17)"
                      fill-rule="evenodd"
                      d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m-.232-5.36l5-6l-1.536-1.28l-4.3 5.159l-2.225-2.226l-1.414 1.414l3 3l.774.774z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>{" "}
                <div>561210 - Facility Support Services </div>
              </li>
              <li className="flex items-center gap-3 ">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.5em"
                    height="1.5em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="rgb(108 133 17)"
                      fill-rule="evenodd"
                      d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m-.232-5.36l5-6l-1.536-1.28l-4.3 5.159l-2.225-2.226l-1.414 1.414l3 3l.774.774z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>{" "}
                <div>
                  541614 - Process, Physical Distribution & Logistics Consulting
                  Services
                </div>
              </li>
              <li className="flex items-center gap-3 ">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.5em"
                    height="1.5em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="rgb(108 133 17)"
                      fill-rule="evenodd"
                      d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m-.232-5.36l5-6l-1.536-1.28l-4.3 5.159l-2.225-2.226l-1.414 1.414l3 3l.774.774z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>{" "}
                <div>541860 - Direct Mail Advertising </div>
              </li>
              <li className="flex items-center gap-3 ">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.5em"
                    height="1.5em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="rgb(108 133 17)"
                      fill-rule="evenodd"
                      d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m-.232-5.36l5-6l-1.536-1.28l-4.3 5.159l-2.225-2.226l-1.414 1.414l3 3l.774.774z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>{" "}
                <div>561410 - Document Preparation Services</div>
              </li>
              <li className="flex items-center gap-3 ">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.5em"
                    height="1.5em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="rgb(108 133 17)"
                      fill-rule="evenodd"
                      d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m-.232-5.36l5-6l-1.536-1.28l-4.3 5.159l-2.225-2.226l-1.414 1.414l3 3l.774.774z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>{" "}
                <div>561431 - Private Mail Centers</div>
              </li>
              <li className="flex items-center gap-3 ">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.5em"
                    height="1.5em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="rgb(108 133 17)"
                      fill-rule="evenodd"
                      d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m-.232-5.36l5-6l-1.536-1.28l-4.3 5.159l-2.225-2.226l-1.414 1.414l3 3l.774.774z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>{" "}
                <div>561499 - All other Business Supports Services</div>
              </li>
              <li className="flex items-center gap-3 ">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.5em"
                    height="1.5em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="rgb(108 133 17)"
                      fill-rule="evenodd"
                      d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m-.232-5.36l5-6l-1.536-1.28l-4.3 5.159l-2.225-2.226l-1.414 1.414l3 3l.774.774z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>{" "}
                <div>561910 - Packaging and Labeling Services</div>
              </li>
              <li className="flex items-center gap-3 ">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.5em"
                    height="1.5em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="rgb(108 133 17)"
                      fill-rule="evenodd"
                      d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m-.232-5.36l5-6l-1.536-1.28l-4.3 5.159l-2.225-2.226l-1.414 1.414l3 3l.774.774z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>{" "}
                <div>611420 - Computer Training</div>
              </li>
              <li className="flex items-center gap-3 ">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.5em"
                    height="1.5em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="rgb(108 133 17)"
                      fill-rule="evenodd"
                      d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m-.232-5.36l5-6l-1.536-1.28l-4.3 5.159l-2.225-2.226l-1.414 1.414l3 3l.774.774z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>{" "}
                <div>665444 - SwAM - Virginia Small Women and Minority </div>
              </li>
              <li className="flex items-center gap-3 ">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.5em"
                    height="1.5em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="rgb(108 133 17)"
                      fill-rule="evenodd"
                      d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m-.232-5.36l5-6l-1.536-1.28l-4.3 5.159l-2.225-2.226l-1.414 1.414l3 3l.774.774z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>{" "}
                <div> Source Multiple Award Schedule (MAS) </div>

              </li>
              <li className="flex items-center gap-3 ">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.5em"
                    height="1.5em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="rgb(108 133 17)"
                      fill-rule="evenodd"
                      d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m-.232-5.36l5-6l-1.536-1.28l-4.3 5.159l-2.225-2.226l-1.414 1.414l3 3l.774.774z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>{" "}
                <div>238220 - "Coming Soon" </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex w-full lg:w-[50%] justify-center lg:justify-start">
          <div className="aboutBox w-[80%] rounded-[15px] bg-white p-[50px] text-white shadow-xl"
            style={{ border: "2px solid green", borderRadius: "15px" }}>

            <h2 className="decoration-[rgb(235 225 123)] text-[28px] tracking-[1px] underline decoration-2 underline-offset-[5px]"
              style={{ color: "rgb(139, 101, 8)" }}>
              Government
            </h2>



            <div className="flex h-[100%] items-center pt-[30px] ">
              <ul className="flex flex-col gap-[20px] font-[600] text-black ">
                <li className=" items-center gap-3 text-black  ">
                  <div className="flex gap-2">
                    <div> - </div>
                    <div className="text-[21px] text-black ">
                      U.S. Patent & Trademark
                    </div>
                  </div>
                  <div className="pl-[20px] ">Facilities Support Services</div>
                </li>
                <li className=" items-center gap-3 ">
                  <div className="flex gap-2">
                    <div> - </div>
                    <div className="text-[21px] ">
                      Federal Aviation Administration
                    </div>
                  </div>
                  <div className="pl-[20px] ">Distribution & Mail Services</div>
                </li>
                <li className=" items-center gap-3 ">
                  <div className="flex gap-2">
                    <div> - </div>
                    <div className="text-[21px]">
                      Federal Emergency Management Agency
                    </div>
                  </div>
                  <div className="pl-[20px] ">
                    Shipping, Receiving & Courier Services
                  </div>
                </li>
                <li className=" items-center gap-3 ">
                  <div className="flex gap-2">
                    <div> - </div>
                    <div className="text-[21px] ">
                      Social Security Administration
                    </div>
                  </div>
                  <div className="pl-[20px]">Print & Mail Services</div>
                </li>
                <li className=" items-center gap-3 ">
                  <div className="flex gap-2">
                    <div> - </div>
                    <div className="text-[21px]">Veterans Affairs</div>
                  </div>
                  <div className="pl-[20px] "> Print & Mail Services</div>
                </li>
                <li className=" items-center gap-3 ">
                  <div className="flex gap-2">
                    <div> - </div>
                    <div className="text-[21px] ">
                      Office of the U.S. Courts
                    </div>
                  </div>
                  <div className="pl-[20px] ">
                    Shipping, Receiving & Mail Services
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>


 

      <div
        
        style={{ backgroundColor: "rgb(234 229 229 / 44%)" }}
        className="flex  justify-center gap-[120px] px-[0px] sm:px-[18px] py-[20px] pb-[100px]"
      >
        <div className="w-[80%] rounded-2xl bg-white	p-[40px] shadow-xl" style={{ border: "2px solid rgb(77 125 56 )", borderRadius: "15px" }}>
          <div  >
            <h2
              className="decoration-[rgb(235	 225 123)]	text-[22px] tracking-[1px] underline	decoration-2	underline-offset-[5px]	"
              style={{ color: "rgb(139, 101, 8)" }}
            >
              Corporations
            </h2>
            <div className="flex justify-between flex-col sm:flex-row text-black">
              <p className="pt-[20px] text-[20px]">
                Wolters Kluwer Business & Law{" "}
              </p>
              <p className="pt-[20px] text-[20px]">
                Mail Consolidation & Logistics{" "}
              </p>
            </div>
          </div>
          <div className="pt-[50px]">
            <h2
              className="decoration-[rgb(235	 225 123)]	text-[22px] tracking-[1px] underline	decoration-2	underline-offset-[5px]	"
              style={{ color: "rgb(139, 101, 8)" }}
            >
              Associations
            </h2>
            <div className="flex justify-between flex-col sm:flex-row text-black">
              <p className="pt-[20px] text-[20px]">
                National Education Association
              </p>
              <p className="pt-[20px] text-[20px]">
                Instructional Design & Training
              </p>
            </div>
          </div>
          <div className="pt-[50px]">
            <h2
              className="decoration-[rgb(235	 225 123)]	text-[22px] tracking-[1px] underline	decoration-2	underline-offset-[5px]	"
              style={{ color: "rgb(139, 101, 8)" }}
            >
              Seaport-e
            </h2>

            <p className="pt-[20px] text-[20px] text-black">
              NAVSEA awarded Falon Sourcing Solutions a Multiple Award Contract (SeaPort-e) on June 30, 2016.
            </p>
            <p className="pt-[20px] text-[17px] text-black">
              -  The SeaPort-e is the Navy's electronic platform for acquiring support services in 22 functional areas including Engineering, Financial Management, and Program Management. The Navy Systems Commands (NAVSEA, NAVAIR, SPAWAR, NAVFAC, and NAVSUP), the Office of Naval Research, Military Sealift Command, and the United States Marine Corps compete their service requirements amongst 2400+ SeaPort-e IDIQ multiple award contract holders.
            </p>

          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default About;
