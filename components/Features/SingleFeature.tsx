import React from "react";
import { Feature } from "@/types/feature";
import Image from "next/image";
import { motion } from "framer-motion"; 

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, description, image } = feature;

  return (
    <>
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
              className=" cards et_pb_column et_pb_column_1_3 et_pb_column_11 lt-service-sec-2  et_pb_css_mix_blend_mode_passthrough cursor-pointer	">
        <div className="et_pb_module et_pb_image et_pb_image_0 img_service images">
          <span className="et_pb_image_wrap hover:bg-black ">
            <img
              loading="lazy"
              decoding="async"
              width="600"
              height="500"
              src={image}
              alt="divi service section image 2"
              title="divi service section image 2"
           
              className="wp-image-987495178"
            />
          </span>
        </div>
        <div className="et_pb_module et_pb_blurb et_pb_blurb_6 content_service  et_pb_text_align_center  et_pb_blurb_position_top et_pb_bg_layout_light">
          <div className="et_pb_blurb_content">
            <div className="et_pb_main_blurb_image">
              <span className="et_pb_image_wrap">
                <span className="et-waypoint et_pb_animation_off et_pb_animation_off_tablet et_pb_animation_off_phone et-pb-icon et-animated">
                  <img src={icon}/>
                </span>
              </span>
            </div>
            <div className="et_pb_blurb_container">
              <h4 className="et_pb_module_header">
                <span> {title}</span>
              </h4>
              <div className="et_pb_blurb_description">
              {description}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* <div
        className=" cards animate_top z-40 rounded-lg border-2 border-green-500 	bg-white p-7.5 shadow-solid-3 transition-all  dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark xl:p-12.5 transition-all  hover:shadow-lg 	"
      >
        <div className="relative images flex h-16 w-16 items-center justify-center rounded-[4px] bg-[#4d7d38] -mt-[80px]">
          <img src={icon} width={36} height={36} alt="title" />
        </div>
        <h3 className="mb-5 mt-7.5 text-xl font-semibold text-black dark:text-white xl:text-itemtitle">
          {title}
        </h3>
        <p className="text-black">{description}</p>
      </div> */}
    </>
  );
};

export default SingleFeature;
