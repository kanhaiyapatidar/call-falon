"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const carouselRef = useRef(null);

  const images = [
    {
      src: "/images/features/logistic.jpg",
      alt: "Image 1",
      text: "Falon has established a standard of excellence by providing comprehensive support services to Federal, State, Local Governments, Corporations and Associations through delivering high quality cost effective innovative solutions. In addition, Falon is a graduate of the U.S. Small Business Administration 8(a) business development program.",
    },
    {
      src: "/images/features/support.jpg",
      alt: "Image 2",
      text: "The Falon Sourcing Solutions Falon website is intended to provide information about our company and the services we provide. Falon makes no express or implied warranties as to the accuracy of any third party information contained in this website.The reader accepts the information contained on our website as is and assumes all responsibility for the use of such information.",
    },
    {
      src: "/images/features/warehouse.jpg",
      alt: "Image 3",
      text: "Any links provided in the Falon website are for your convenience only. Falon is not responsible for the content or performance of the websites nor do these links imply endorsement of the material or the owner of the website. ",
    },
    {
      src: "/images/features/facilities.webp",
      alt: "Image 4",
      text: "Information on this website is subject to change without notice.While visiting our website, please feel free to contact us with any questions, suggestions, or comments you may have that would improve websites content",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 15000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleSwipe = (direction) => {
    if (direction === "left") {
      setCurrentImage(
        (prevImage) => (prevImage - 1 + images.length) % images.length,
      );
    } else if (direction === "right") {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }
  };

  return (
    <main className="banner-image relative h-[100vh] ">
      <div className="relative h-[100vh] overflow-hidden" ref={carouselRef}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute transition-transform duration-500 ease-in-out left-${
              index * 100
            }% ${currentImage === index ? "z-10 opacity-100" : "opacity-0"}`}
            style={{ width: "100%", height: "100vh" }}
          >
            <div>
            <img
              src={image.src}
              alt={image.alt}
              className={currentImage === index ?  "h-[100vh] w-[100%]  filter brightness-50 opacity-80" : "h-[100vh] w-[100%] "}
            />
            
            </div>
            <div
              className={`absolute inset-0 flex-col   z-20 flex w-full items-center justify-center ${
                currentImage === index ? "opacity-100 " : "opacity-0"
              }`}
              
            >
              <div className="flex justify-center">
              <h1 className="mb-5 text-[22px] font-bold text-white text-center w-[90%] sm:w-[70%]">
                {image.text}
              </h1>
              
              </div>
              <Link
              href="/"
              className="flex items-center justify-center rounded-full  px-7.5 mt-5 py-3.5 text-regular  duration-300 ease-in-out h hover:opacity-80	text-white font-[700] cursor-pointer	"
              style={{ border:'3px solid rgb(230 217 90)', }}
            >
              Contact us
            </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute inset-0 z-20 flex justify-between">
        <button
          onClick={() => handleSwipe("left")}
          className="rounded-full bg-transparent px-4 py-2 text-white hover:bg-gray-900/20"
        >
          {"<"}
        </button>
        <button
          onClick={() => handleSwipe("right")}
          className="rounded-full bg-transparent px-4 py-2 text-white hover:bg-gray-900/20"
        >
          {">"}
        </button>
      </div>
    </main>
  );
};

export default Hero;
