"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";

const About = () => {
  return (
    <>
      {/* <section className="py-[150px]">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0 ">
          <div className="animate_top mx-auto text-center">
            <SectionHeader
              headerInfo={{
                title: `ABOUT US`,
                description:``,
                subtitle: `About Falon Sourcing Solutions LLC`,
              }}
            />
          </div>
      
        </div>
        <div className="mx-auto max-w-c-1235 overflow-hidden px-4 pt-[50px] md:px-8 2xl:px-0">
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left md:w-1/2"
            >
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg2 dark:before:bg-titlebgdark">
                  About{" "}
                </span>
              </h2>
              <p>
                ​Falon recognizes that its staff and clients are its most
                important assets and that the effectiveness of the organization
                depends on the accumulated contributions of its individual
                employees. Falon has a strong belief in people and a respect for
                relationships, both internal and external, an approach that has
                been successful in building and delivering cohesive on-site
                program support teams.
                <br />
                <br />
                To achieve excellence in performance and attain customer service
                goals, Falon applies an interactive approach to staff management
                that is most effective when it is based on shared values and
                expectations. Through fostering a flexible work force within a
                healthy work place, high-quality service is consistently
                delivered to Falon's contracts. A work environment that
                encourages open communication, prizes fairness, recognizes
                quality work, and respects the differences and rights of all
                individuals ultimately yields optimal staff health and
                performance.
              </p>
            </motion.div>
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
              className="animate_top md:w-[50%]  w-[100%] rounded-lg bg-white p-10 shadow-solid-8 dark:border dark:border-strokedark dark:bg-black xl:p-15"
            >
              <h2 className="mb-15 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
                Send a message
              </h2>

              <form
                action="https://formbold.com/s/unique_form_id"
                method="POST"
              >
                <div className="mb-7.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                  <input
                    type="text"
                    placeholder="Full name"
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                  />

                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                  />
                </div>

                <div className="mb-12.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                  />

                  <input
                    type="text"
                    placeholder="Phone number"
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                  />
                </div>

                <div className="mb-11.5 flex">
                  <textarea
                    placeholder="Message"
                    rows={4}
                    className="w-full border-b border-stroke bg-transparent focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
                  ></textarea>
                </div>

                <div className="flex flex-wrap gap-4 xl:justify-end ">
                  <div
                    aria-label="send message"
                    className="inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark cursor-pointer	"
                  >
                    Send Message
                    <svg
                      className="fill-white"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z"
                        fill=""
                      />
                    </svg>
                  </div>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section> */}

      {/* <div className=" pt-[150px] et_pb_row et_pb_row_5 et_pb_gutters3 ">
        <div className="et_pb_column et_pb_column_1_2 et_pb_column_6  et_pb_css_mix_blend_mode_passthrough">
          <div className="et_pb_module et_pb_text et_pb_text_4  et_pb_text_align_left et_pb_bg_layout_light">
            <div className="et_pb_text_inner">
              <p>About us</p>
            </div>
          </div>
          <div className="et_pb_module et_pb_divider et_pb_divider_0 et_pb_divider_position_ et_pb_space">
            <div className="et_pb_divider_internal"></div>
          </div>
          <div className="et_pb_module et_pb_blurb et_pb_blurb_3  et_pb_text_align_left  et_pb_blurb_position_top et_pb_bg_layout_light">
            <div className="et_pb_blurb_content">
              <div className="et_pb_blurb_container">
                <h3 className="et_pb_module_header">
                  <span>Choose The Best IT Service Company</span>
                </h3>
                <div className="et_pb_blurb_description">
                  <p>
                    ITSoft has been optimized to give your visitors the best
                    experience in terms of UX/UI, with a unique design.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="et_pb_module et_pb_tabs et_pb_tabs_0 ld-abt-tab-sec2 et_slide_transition_to_1 et_slide_transition_to_2 et_slide_transition_to_0">
            <ul className="et_pb_tabs_controls clearfix">
              <li className="et_pb_tab_0" style={{ height: "23.8px;" }}>
                <a href="#"> Our Mission </a>
              </li>
              <li
                className="et_pb_tab_1 et_pb_tab_active"
                style={{ height: "23.8px;" }}
              >
                <a href="#"> Our Vision</a>
              </li>
              <li className="et_pb_tab_2" style={{ height: "23.8px;" }}>
                <a href="#"> Our Value</a>
              </li>
            </ul>
            <div className="et_pb_all_tabs">
              <div
                className="et_pb_tab et_pb_tab_0 clearfix et_pb_active_content"
                style={{ zIndex: "1;", display: "none;", opacity: "0;" }}
              >
                <div className="et_pb_tab_content">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry’s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.{" "}
                </div>
              </div>
              <div
                className="et_pb_tab et_pb_tab_1 clearfix et-pb-active-slide"
                style={{ zIndex: "1;", display: "block;", opacity: "1;" }}
              >
                <div className="et_pb_tab_content">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry’s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.{" "}
                </div>
              </div>
              <div
                className="et_pb_tab et_pb_tab_2 clearfix et-pb-moved-slide"
                style={{ zIndex: "1;", display: "none;", opacity: "0;" }}
              >
                <div className="et_pb_tab_content">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry’s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="et_pb_module et_pb_blurb et_pb_blurb_4 abt-vedio  et_pb_text_align_left  et_pb_blurb_position_left et_pb_bg_layout_light">
            <div className="et_pb_blurb_content">
              <div className="et_pb_main_blurb_image">
                <span className="et_pb_image_wrap">
                  <span className="et-waypoint et_pb_animation_off et_pb_animation_off_tablet et_pb_animation_off_phone et-pb-icon et-animated">
                    E
                  </span>
                </span>
              </div>
              <div className="et_pb_blurb_container">
                <h4 className="et_pb_module_header">
                  <span> Check details about our company </span>
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="et_pb_column et_pb_column_1_2 et_pb_column_7  et_pb_css_mix_blend_mode_passthrough et-last-child">
          <div className="et_pb_module et_pb_image et_pb_image_1 ld-abt-img-sec2">
            <span className="et_pb_image_wrap ">
              <img
                loading="lazy"
                decoding="async"
                width="600"
                height="600"
                src="https://demos.layoutdivi.com/wp-content/uploads/2022/11/Divi-Image-Hover-Hero-Image-1-1.jpg"
                alt=""
                title="Divi-Image-Hover-Hero-Image-1"
                sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) 600px, 100vw"
                className="wp-image-987496760"
              />
            </span>
          </div>
          <div
            className="et_pb_module et_pb_number_counter et_pb_number_counter_1 ld-abt-ctr-sec2 et_pb_text_align_left et_pb_bg_layout_light et_pb_with_title active"
            data-number-value="12"
            data-number-separator=""
          >
            <div className="percent">
              <p>
                <span className="percent-value">12</span>
                <span className="percent-sign"></span>
              </p>
            </div>
            <h3 className="title">years of experiences</h3>
            <canvas
              height="0"
              width="0"
              style={{ height: "0px;", width: " 0px;" }}
            ></canvas>
          </div>
          <div className="et_pb_module et_pb_blurb et_pb_blurb_5 ld-abt-blurb-sec2  et_pb_text_align_left  et_pb_blurb_position_left et_pb_bg_layout_light">
            <div className="et_pb_blurb_content">
              <div className="et_pb_main_blurb_image">
                <span className="et_pb_image_wrap">
                  <span className="et-waypoint et_pb_animation_off et_pb_animation_off_tablet et_pb_animation_off_phone et-pb-icon et-animated">
                    
                  </span>
                </span>
              </div>
              <div className="et_pb_blurb_container">
                <h5 className="et_pb_module_header">
                  <span>Awarded Company</span>
                </h5>
                <div className="et_pb_blurb_description">
                  Lorem Ipsum is simply dummy text{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

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
        <div className="flex w-full lg:w-[50%]  flex-col items-center	  ">
          <img
            loading="lazy"
            decoding="async"
            width="700"
            height="600"
            src="https://demos.layoutdivi.com/wp-content/uploads/2022/11/Divi-About-Us-Section-Hero-Image-1.jpg"
            alt=""
            title=""
            className="h-[100%] w-[80%] rounded-[10px] 	"
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
              " To achieve excellence in performance and attain customer service goals, Falon applies an interactive approach to staff management that is most effective when it is based on shared values and expectations. Through fostering a flexible work force within a healthy work place, high-quality service is consistently delivered to Falon's contracts. A work environment that encourages open communication, prizes fairness, recognizes quality work, and respects the differences and rights of all individuals ultimately yields optimal staff health and performance."
            </p>

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
        className="flex  justify-center gap-[120px] flex-col lg:flex-row p-[0px] sm:px-[18px] py-[70px]"
        style={{ backgroundColor: "rgb(234 229 229 / 44%)" }}
      >
        <div className="flex w-full  lg:w-[50%]   flex-col items-center  lg:items-end justify-center	  ">
          <div
            className="aboutBox box w-[80%]  border-2 p-[25px]  shadow-xl "
            style={{ border: "2px solid green", borderRadius: "15px" }}
          >
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
                <div>238220 - "Coming Soon" </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="  flex h-[100%] w-full lg:w-[50%] justify-center lg:justify-start ">
          <div className="aboutBox w-[80%] rounded-[15px] bg-white p-[50px] text-white shadow-xl	 ">
          
          
            <h2 className="decoration-[rgb(235 225 123)] text-[22px] tracking-[1px] underline decoration-2 underline-offset-[5px]"
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
        style={{ backgroundColor: "rgb(234 229 229 / 44%)" }}
        className="flex  justify-center gap-[120px] px-[0px] sm:px-[18px] py-[20px] pb-[100px]"
      >
        <div className="w-[80%] rounded-2xl bg-white	p-[40px] shadow-xl">
          <div>
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
      </motion.div>
      {/* <!-- ===== About Start ===== --> */}
      {/* <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-30 mt-[150px]">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <Image
                src="/images/about/about-light-01.png"
                alt="About"
                className="dark:hidden"
                fill
              />
              <Image
                src="/images/about/about-dark-01.png"
                alt="About"
                className="hidden dark:block"
                fill
              />
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right md:w-1/2"
            >
              <span className="font-medium uppercase text-black dark:text-white">
                <span className="mb-4 mr-4 inline-flex rounded-full bg-meta px-4.5 py-1 text-metatitle uppercase text-white ">
                  New
                </span>{" "}
                SaaS Boilerplate for Next.js
              </span>
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                A Complete Solution for
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
                  SaaS Startup
                </span>
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                ultricies lacus non fermentum ultrices. Fusce consectetur le.
              </p>

              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    01
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                    React 18, Next.js 13 and TypeScript
                  </h3>
                  <p>Ut ultricies lacus non fermentum ultrices.</p>
                </div>
              </div>
              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    02
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                    Fully Customizable
                  </h3>
                  <p>consectetur adipiscing elit fermentum ultricies.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section> */}
      {/* <!-- ===== About End ===== --> */}

      {/* <!-- ===== About Two Start ===== --> */}

      {/* <!-- ===== About Two End ===== --> */}
    </>
  );
};

export default About;
