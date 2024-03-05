"use client";
import Link from "next/link";

const SidebarLink = () => {
  const data = [
    {
      image: "/images/contractingImages/contractingVehiclesBox-1.jpg",
    },
    {
      image: "/images/contractingImages/contractingVehiclesBox-2.jpeg",
    },
    {
      image: "/images/contractingImages/contractingVehiclesBox-3.png",
    },
  ];
  return (
    <>
      <div className="flex h-[100%]  flex-col	justify-around gap-y-9 p-[0px] py-[70px] sm:px-[18px] lg:flex-row">
        {data.map((data, index) => {
          return (
            <div className="flex w-full flex-col items-center justify-center  lg:w-[35%]">
              <div
                className="aboutBox box w-[80%] border-2 p-[25px] shadow-xl"
                style={{ border: "2px solid green", borderRadius: "15px" }}
              >
                <img src={data.image} alt="" className="w-[100%] h-[170px]" />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SidebarLink;
