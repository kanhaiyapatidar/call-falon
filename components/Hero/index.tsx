"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion"; 
import Link from "next/link";


const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  
  return (
    <>

    
      <main className="banner-image h-[100vh]">
        <div className="bgImage">
          <img src="/images/features/logistic.jpg" className="h-[100%] w-[100%]"/>
        </div>
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
              viewport={{ once: true }}className="relative px-6 lg:px-8 flex items-center h-full ">
          <div className="  mx-auto  pt-16 sm:pb-24 sm:pt-40 	 flex flex-col items-center text-center w-[60%]">
          <h1 className="mb-5 pr-16 text-3xl font-bold text-black text-white xl:text-hero ">
                Secret to our success is our <br/> customer's loyalty
  
              </h1>
              <p className="text-white">
                Falon has established a standard of excellence by providing
                comprehensive support services to Federal, State, Local
                Governments, Corporations and Associations through delivering
                high quality cost effective innovative solutions. In addition,
                Falon is a graduate of the U.S. Small Business Administration
                8(a) business development program.
              </p>
     
              <Link
              href="/"
              className="flex items-center justify-center rounded-full  px-7.5 py-2.5 text-regular  duration-300 ease-in-out h hover:opacity-80 mt-[20px]	text-white font-[700]"
              style={{ border:'3px solid rgb(230 217 90)', }}
            >
              Contact us
            </Link>
          </div>
        </motion.div>
      </main>
      {/* <section className=" hero h-[100vh] overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46  ">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
                Secret to our success is our customer's
                <span className="relative ml-5 inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
                  loyalty
                </span>
              </h1>
              <p>
                Falon has established a standard of excellence by providing
                comprehensive support services to Federal, State, Local
                Governments, Corporations and Associations through delivering
                high quality cost effective innovative solutions. In addition,
                Falon is a graduate of the U.S. Small Business Administration
                8(a) business development program.
              </p>
            </div>

            <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
                <Image
                  src="/images/shape/shape-01.png"
                  alt="shape"
                  width={46}
                  height={246}
                  className="absolute -left-11.5 top-0"
                />
                <Image
                  src="/images/shape/shape-02.svg"
                  alt="shape"
                  width={36.9}
                  height={36.7}
                  className="absolute bottom-0 right-0 z-10"
                />
                <Image
                  src="/images/shape/shape-03.svg"
                  alt="shape"
                  width={21.64}
                  height={21.66}
                  className="absolute -right-6.5 bottom-0 z-1"
                />
                <div className=" relative aspect-[700/444] w-[75%] ">
                  <Image
                    className="dark:hidden"
                    src="/hero1.webp"
                    alt="Hero"
                    fill
                  />
                  <Image
                    className="hidden  dark:block"
                    src="/hero1.webp"
                    alt="Hero"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Hero;
