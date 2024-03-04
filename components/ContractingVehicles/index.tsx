"use client";
import Link from "next/link";

const SidebarLink = () => {
  return (
    <>
      <div
        
      
        className="flex justify-center gap-[120px] flex-col lg:flex-row p-[0px] sm:px-[18px] py-[70px]"
       
      >

        <div className="flex w-full lg:w-[50%] flex-col items-center lg:items-end justify-center">
          <div className="aboutBox box w-[80%] border-2 p-[25px] shadow-xl" style={{ border: "2px solid green", borderRadius: "15px" }}>

          <h2 className="decoration-[rgb(235 225 123)] text-[28px] tracking-[1px] underline decoration-2 underline-offset-[5px]"
              style={{ color: "rgb(139, 101, 8)" }}>
              Future content
            </h2>

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
                <div>
                  541614 - Process, Physical Distribution & Logistics Consulting
                  Services
                </div>
              </li> <li className="flex items-center gap-3 ">
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
         
           
         
            </ul>
          </div>
        </div>
        <div className="flex w-full lg:w-[50%] justify-center lg:justify-start">
          <div className="aboutBox w-[80%] rounded-[15px] bg-white p-[50px] text-white shadow-xl"
            style={{ border: "2px solid green", borderRadius: "15px" }}>

            <h2 className="decoration-[rgb(235 225 123)] text-[28px] tracking-[1px] underline decoration-2 underline-offset-[5px]"
              style={{ color: "rgb(139, 101, 8)" }}>
              Future content
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
              
              
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarLink;
