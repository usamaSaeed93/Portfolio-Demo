
import React from "react";
import Image from "next/image";
import clip from "../../Assets/Images/clip.png";
import Navbar from "@/layout/Navbar";

import { useForm } from "react-hook-form";

import Footer from "@/layout/Footer";
import axios from "axios";
type dataType = {
  Name: string;
  Email: string;
  Subject: string;
  Message: string;
};
if (typeof window !== "undefined") {
  let myVariable = localStorage.getItem("dark");
  if (myVariable === "False") {
    document.documentElement.classList.remove("dark");
  }
}
export default function ContactUs() {
  const sendData = async (record: dataType) => {
    const { Name, Email, Subject, Message } = record;
    await axios.post(
      "https://portfolio-9462b-default-rtdb.firebaseio.com/userRecordData.json",
      {
        method: "POST",
        Headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Name,
          Email,
          Subject,
          Message,
        }),
      }
    );
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<dataType>();
  const onSubmit = (data: dataType) => sendData(data);

  return (
    <>
      <Navbar />

      <div className="flex">
        <div className="flex"></div>
      </div>

      <div className="flex flex-col w-fit p-10 m-[5%] background__divs rounded-[30px] sm:m-auto">
        <div className="flex flex-col justify-evenly">
          <div className="flex flex-row ">
            <h1 className="text-3xl text-[#fff]">Let's </h1>
            <br />
            <h1 className="text-3xl text-[#fff]">
              Work <span className="text-3xl text-[#5b78f6]">Together</span>
            </h1>
            <Image src={clip} alt="clip" />
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col">
              <input
                placeholder="Name *"
                className="flex justify-start align-middle pl-5 w-[250px] text-[#fff] md:w-[400px] rounded-[30px] bg-lightPrimaryGradient dark:bg-gradient-to-t from-darkPrimaryGradient to-darkPrimaryGradient mt-10 h-[80px]"
                {...register("Name", {
                  required: "Name is required",
                  maxLength: { value: 10, message: "Valid length exceeded" },
                })}
              />

              <input
                type="text"
                placeholder="Email *"
                className="flex justify-start align-middle pl-5 w-[250px] md:w-[400px] rounded-[30px] text-[#fff] bg-lightPrimaryGradient dark:bg-gradient-to-t from-darkPrimaryGradient to-darkSecondaryGradient mt-10 h-[80px]"
                {...register("Email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                    message: "Not valid pattern",
                  },
                })}
              />
              <input
                type="text"
                placeholder="Your Subject *"
                className="flex justify-start align-middle pl-5 w-[250px] md:w-[400px] rounded-[30px] text-[#fff] bg-lightPrimaryGradient dark:bg-gradient-to-t from-darkPrimaryGradient to-darkSecondaryGradient mt-10 h-[80px]"
                {...register("Subject")}
              />
              <input
                type="text"
                placeholder="Message *"
                className="flex justify-start align-top pl-5 w-[250px] md:w-[400px] rounded-[30px] bg-lightPrimaryGradient dark:bg-gradient-to-t from-darkPrimaryGradient to-darkPrimaryGradient text-[#fff] mt-10 h-[100px]"
                {...register("Message")}
              />
              <button
                type="submit"
                className="w-full rounded-[30px] bg-lightPrimaryGradient dark:bg-gradient-to-t from-darkPrimaryGradient to-darkSecondaryGradient h-10 text-[#fff] mt-5"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
