"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import SectionHeader from "../Common/SectionHeader";
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {
  /**
   * Source: https://www.joshwcomeau.com/react/the-perils-of-rehydration/
   * Reason: To fix rehydration error
   */
  const [hasMounted, setHasMounted] = useState(false);
 
  useEffect(() => {
    setHasMounted(true);
  }, []);
 
  const [formData, setFormData] = useState<any>({
    fullName: '',
    email: '',
    subject: '',
    phoneNumber: '',
    message: ''
  });
 
  const [phoneNumberErrorShown, setPhoneNumberErrorShown] = useState(false);
 
 
  const handleChange = (e) => {
    if (e.target.name === "phoneNumber") {
      const value = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
      if (value.length <= 10) {
        setFormData({ ...formData, [e.target.name]: value });
        if (phoneNumberErrorShown) {
          setPhoneNumberErrorShown(false); // Reset error state
        }
      } else {
        if (!phoneNumberErrorShown) {
          toast.error('Phone Number should be maximum 10 digits');
          setPhoneNumberErrorShown(true); // Set error state
        }
      }
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };
 
 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.fullName && formData.email && formData.subject && formData.phoneNumber && formData.message) {
      emailjs.sendForm('service_bgmrk6k', 'template_5xwk2u5', e.target, 'uJ0HIZXzllAjizAHe')
        .then((result) => {
          toast.success('Email sent successfully');
          // Clear form fields after successful submission
          setFormData({
            fullName: '',
            email: '',
            subject: '',
            phoneNumber: '',
            message: ''
          });
        })
        .catch((error) => {
          toast.error('Error sending email');
        });
    } else {
      toast.error('Fill the required informations!');
    }
 
  };
 
  return (
    <>
      {/* <!-- ===== Contact Start ===== --> */}
 
      <section id="support" className="px-4 pb-[50px] md:px-8 2xl:px-0 ">
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
          className="flex justify-center gap-y-[80px] flex-wrap gap-[15px] pt-[100px]"
        >
          <div className=" contactCard animate_top z-40 w-[400px] rounded-lg border-2   border-green-500 bg-white p-7.5 shadow-solid-3  transition-all transition-all   dark:border-strokedark dark:bg-blacksection  dark:hover:bg-hoverdark xl:p-12.5  ">
            <div className="images relative -mt-[80px] flex h-16 w-16 items-center justify-center rounded-[4px] bg-[#4d7d38]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="white"
                  d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z"
                />
              </svg>
            </div>
            <h3 className="mb-5 mt-7.5 text-xl font-semibold text-black dark:text-white xl:text-itemtitle">
              Contact Falon Sourcing Solutions LLC
            </h3>
            <p className="text-black">
              At Falon Sourcing Solutions LLC, our attentive staff is available
              Monday through Saturday to answer your questions and ensure you
              are 100% satisfied.
            </p>
          </div>
 
          <div className=" contactCard an imate_top z-40 w-[400px] rounded-lg border-2  border-green-500 bg-white p-7.5 shadow-solid-3  transition-all transition-all  dark:border-strokedark dark:bg-blacksection  dark:hover:bg-hoverdark   xl:p-12.5">
            <div className="images relative -mt-[80px] flex h-16 w-16 items-center justify-center rounded-[4px] bg-[#4d7d38]">
              <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 2048 2048"><path fill="#ffffff" d="M1185 1179q-88-75-195-115t-222-40q-88 0-170 23t-153 64t-129 100t-100 130t-65 153t-23 170H0q0-120 35-231t101-205t156-167t204-115q-113-74-176-186t-64-248q0-106 40-199t109-163T568 40T768 0q106 0 199 40t163 109t110 163t40 200q0 66-16 129t-48 119t-75 103t-101 83q65 25 124 61t111 81zM384 512q0 80 30 149t82 122t122 83t150 30q79 0 149-30t122-82t83-122t30-150q0-79-30-149t-82-122t-123-83t-149-30q-80 0-149 30t-122 82t-83 123t-30 149m1344 256q66 0 124 25t101 69t69 102t26 124q0 66-25 124t-69 102t-102 69t-124 25q-23 0-45-3l-587 587q-27 27-62 41t-74 15q-40 0-75-15t-61-41t-41-61t-15-75q0-38 14-73t42-63l587-587q-3-22-3-45q0-66 25-124t68-101t102-69t125-26m0 512q40 0 75-15t61-41t41-61t15-75q0-41-19-82l-146 146h-91v-91l146-146q-41-19-82-19q-40 0-75 15t-61 41t-41 61t-15 75q0 41 19 82l-640 641q-19 19-19 45t19 45t45 19q26 0 45-19l641-640q41 19 82 19" /></svg>
            </div>
            <h3 className="mb-5 mt-7.5 text-xl font-semibold text-black dark:text-white xl:text-itemtitle">
              Career Opportunity
            </h3>
            <p className="text-black">
              Are you looking for an exciting career in business? At Falon
              Sourcing Solutions LLC, one person can make a big impact. We value
              customer service, teamwork, and fun.
            </p>
          </div>
 
          <div className=" contactCard animate_top z-40 w-[400px] rounded-lg border-2   border-green-500 bg-white p-7.5 shadow-solid-3  transition-all transition-all  dark:border-strokedark dark:bg-blacksection  dark:hover:bg-hoverdark xl:p-12.5 ">
            <div className="images relative -mt-[80px] flex h-16 w-16 items-center justify-center rounded-[4px] bg-[#4d7d38]">
              <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 256 256"><path fill="#ffffff" d="M83.19 174.4a8 8 0 0 0 11.21-1.6a52 52 0 0 1 83.2 0a8 8 0 1 0 12.8-9.6a67.88 67.88 0 0 0-27.4-21.69a40 40 0 1 0-53.94 0A67.88 67.88 0 0 0 81.6 163.2a8 8 0 0 0 1.59 11.2M112 112a24 24 0 1 1 24 24a24 24 0 0 1-24-24m96-88H64a16 16 0 0 0-16 16v24H32a8 8 0 0 0 0 16h16v40H32a8 8 0 0 0 0 16h16v40H32a8 8 0 0 0 0 16h16v24a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16m0 192H64V40h144Z" /></svg>
            </div>
            <h3 className="mb-5 mt-7.5 text-xl font-semibold text-black dark:text-white xl:text-itemtitle">
              Address
            </h3>
            <p className="text-black">
              703-330-9300 9028-C Prince William Street, Manassas, VA 20110
            </p>
 
            <div className="px-[20px]">
              <ul className="flex justify-end gap-3  pt-[50px]">
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 36 36"><path fill="black" d="M32 6H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m-1.54 22H5.66l7-7.24l-1.44-1.39L4 26.84V9.52l12.43 12.37a2 2 0 0 0 2.82 0L32 9.21v17.5l-7.36-7.36l-1.41 1.41ZM5.31 8h25.07L17.84 20.47Z" className="clr-i-outline clr-i-outline-path-1" /><path fill="none" d="M0 0h36v36H0z" /></svg>
                </li>
                <li>
                  <a href="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24 24"><path fill="black" d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23c-1.48 0-2.93-.39-4.19-1.15l-.3-.17l-3.12.82l.83-3.04l-.2-.32a8.188 8.188 0 0 1-1.26-4.38c.01-4.54 3.7-8.24 8.25-8.24M8.53 7.33c-.16 0-.43.06-.66.31c-.22.25-.87.86-.87 2.07c0 1.22.89 2.39 1 2.56c.14.17 1.76 2.67 4.25 3.73c.59.27 1.05.42 1.41.53c.59.19 1.13.16 1.56.1c.48-.07 1.46-.6 1.67-1.18c.21-.58.21-1.07.15-1.18c-.07-.1-.23-.16-.48-.27c-.25-.14-1.47-.74-1.69-.82c-.23-.08-.37-.12-.56.12c-.16.25-.64.81-.78.97c-.15.17-.29.19-.53.07c-.26-.13-1.06-.39-2-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.12-.24-.01-.39.11-.5c.11-.11.27-.29.37-.44c.13-.14.17-.25.25-.41c.08-.17.04-.31-.02-.43c-.06-.11-.56-1.35-.77-1.84c-.2-.48-.4-.42-.56-.43c-.14 0-.3-.01-.47-.01" /></svg>
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/">
                    <svg className="hover:text-red-500" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="black" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95" /></svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
 
        <div className="relative mx-auto mt-10 max-w-c-1390 px-7.5 pt-10 lg:px-15 lg:py-15 xl:px-20 xl:py-20">
          <div className="absolute left-0 top-0 -z-1 h-2/3 w-full rounded-lg bg-gradient-to-t from-transparent to-[#dee7ff47] dark:bg-gradient-to-t dark:to-[#252A42]"></div>
          <div className="absolute bottom-[-255px] left-0 -z-1 h-full w-full">
            <Image
              src="./images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
              fill
            />
            <Image
              src="./images/shape/shape-dotted-dark.svg"
              alt="Dotted"
              className="hidden dark:block"
              fill
            />
          </div>
 
          <div className="flex flex-col flex-wrap gap-8 md:flex-nowrap md:justify-between lg:flex-row xl:gap-20">
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
              className="animate_top w-full rounded-lg border bg-white p-7.5 shadow-solid-9 dark:border-strokedark dark:bg-black lg:w-[50%] xl:p-15"
              style={{border:'2px solid green'}}
            >
              <h2 className="mb-15 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
                Send a message
              </h2>
 
              <form
                action="https://formbold.com/s/unique_form_id"
                method="POST"
                onSubmit={handleSubmit}
 
              >
                <div className="mb-7.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                  <input
                    type="text"
                    placeholder="Full name *"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full rounded border border-2 border-slate-300 bg-transparent p-[10px] focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                  />
 
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address *"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded border border-2 border-slate-300 bg-transparent p-[10px]  focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                  />
                </div>
 
                <div className="mb-12.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject *"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full rounded border border-2 border-slate-300 bg-transparent p-[10px]  focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                  />
 
                  <input
                    type="text"
                    name="phoneNumber"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    placeholder="Phone number *"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="w-full rounded border border-2 border-slate-300 bg-transparent p-[10px]  focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                  />
                </div>
 
                <div className="mb-11.5 flex">
                  <textarea
                    placeholder="Message *"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full rounded border border-2 border-slate-300 bg-transparent p-[10px] focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
                  ></textarea>
                </div>
 
                <div className="flex flex-wrap gap-4 xl:justify-end ">
                  <div
                    aria-label="send message"
                    className="inline-flex cursor-pointer items-center gap-2.5 rounded-full bg-black px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark "
                  >
                    <button type="submit">Send Message</button>
 
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
              transition={{ duration: 2, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-full md:p-7.5 lg:w-[50%] xl:pt-15"
            >
              {/* <h2 className="mb-12.5 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
                contact us
              </h2>
 
              <div className="5 mb-7">
                <h3 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
                  Our Loaction
                </h3>
                <p>9028-C Prince William Street,  Manassas, VA 20110
 
</p>
              </div>
              <div className="5 mb-7">
                <h3 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
                  Email Address
                </h3>
                <p>
                 callfalon@gmail.com
                </p>
              </div>
              <div>
                <h4 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
                  Phone Number
                </h4>
                <p>
                  <a href="#">703-330-9300</a>
                </p>
              </div> */}
 
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103488.79903795655!2d-77.54669283311422!3d38.74407570437255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b65c756158a8bf%3A0x7bc61d2662028d95!2sHistoric%20District%2C%209028%20Prince%20William%20St%20STE%20C%2C%20Manassas%2C%20VA%2020110%2C%20USA!5e0!3m2!1sen!2sin!4v1707393761191!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: "0;" }}
                loading="lazy"
              ></iframe>
            </motion.div>
          </div>
        </div>
      
      </section>
      {/* Toast container */}
      <ToastContainer
        position="bottom-right" // Position the toast container at the bottom right
        autoClose={5000} // Automatically close the toast after 5 seconds
        hideProgressBar={false} // Show progress bar for the toast
        newestOnTop={false} // Display newer toasts below older ones
        closeOnClick // Close the toast when clicked
        rtl={false} // Left-to-right layout
      />
      {/* <!-- ===== Contact End ===== --> */}
    </>
  );
};
 
export default Contact;