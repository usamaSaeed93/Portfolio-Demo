"use client";
import React from "react";
import Image from "next/image";
import "../Components_sass/_home.scss";
import { motion } from "framer-motion";
import clip from "../Assets/Images/clip.png";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import DrawOutlinedIcon from "@mui/icons-material/DrawOutlined";
import PaletteOutlinedIcon from "@mui/icons-material/PaletteOutlined";
import DevicesOutlinedIcon from "@mui/icons-material/DevicesOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import iconAni from "../Assets/Images/iconAni.png";
import CameraIcon from "@mui/icons-material/Camera";
import CreateIcon from "@mui/icons-material/Create";
import PaletteIcon from "@mui/icons-material/Palette";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const iconStyle = {
  color: "#fff",
  fontSize: "60px",
};
function Middle() {
  return (
    <>
      <div className="flex justify-start flex-col lg:flex-row font-body mb-6 w-full m-auto gap-5 ">
        <motion.div
          whileInView={{ opacity: 1, scale: 1, x: -25, y: -20 }}
          viewport={{ once: true }}
          initial={{ opacity: 0, scale: 0.5 }}
          transition={{ ease: "easeIn", duration: 0.5, bounce: 0.5 }}
          className="flex justify-center m-auto"
        >
          <div className="flex flex-col m-auto gap-8 dark:bg-gradient-to-t from-[#202020] to-[#131313] rounded-[30px] min-w-full max-w-[300px] md:max-w-[450px] h-[250px]">
            <Image src={iconAni} alt="none" />
            <div className="flex flex-col gap-1">
              <span className="text-[#000] dark:text-[#fff] text-3xl pl-10">
                Blog
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, scale: 1, x: -25, y: -20 }}
          viewport={{ once: true }}
          initial={{ opacity: 0, scale: 0.5 }}
          transition={{ ease: "easeIn", duration: 0.5, bounce: 0.5 }}
        >
          <div className="max-w-[550px] mx-auto">
            <div className="flex items-center justify-center space-x-4">
              <div className="flex items-center justify-center w-12 h-12  rounded-full">
                <CameraIcon className="w-6 h-6 text-white" />
              </div>
              <div className="flex items-center justify-center w-12 h-12  rounded-full">
                <CreateIcon className="w-6 h-6 text-white" />
              </div>
              <div className="flex items-center justify-center w-12 h-12  rounded-full">
                <PaletteIcon className="w-6 h-6 text-white" />
              </div>
              <div className="flex items-center justify-center w-12 h-12  rounded-full">
                <PhoneAndroidIcon className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium text-white">
                  Specialization
                </h3>
                <h3 className="text-lg font-medium text-white">
                  Services Offerings
                </h3>
              </div>
              <div className="w-8 h-8 bg-white rounded-full hover:bg-white transition-colors">
                <ArrowForwardIosIcon className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </motion.div>
    
        <motion.div
          whileInView={{ opacity: 1, scale: 1, x: -25, y: -20 }}
          viewport={{ once: true }}
          initial={{ opacity: 0, scale: 0.5 }}
          transition={{ ease: "easeIn", duration: 0.5, bounce: 0.5 }}
        >
          <div className="flex m-auto flex-col dark:bg-gradient-to-t from-[#202020] to-[#131313] rounded-[30px] w-[280px] md:max-w-[400px]  ">
            <div className="flex flex-row  align-middle p-4">
              <div className="hover:bg-white transition duration-0.3s rounded-full p-2">
                <SportsBasketballOutlinedIcon
                  style={iconStyle}
                  className="hover:to-black"
                />
              </div>
              <div className="hover:bg-white transition duration-0.3s rounded-full p-2 ">
                <TwitterIcon style={iconStyle} className="hover:to-black" />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[#000] dark:text-[#fff] text-3xl mt-7">
                Projects
              </span>
            </div>
          </div>
        </motion.div>
      </div>

    </>
  );
}

export default Middle;

{/* <div className="flex justify-evenly flex-col md:flex-row ">
<motion.div
  whileInView={{ opacity: 1, scale: 1, x: -25, y: -20 }}
  viewport={{ once: true }}
  initial={{ opacity: 0, scale: 0.5 }}
  transition={{ ease: "easeIn", duration: 0.5, bounce: 0.5 }}
>
  <div className="flex justify-center align-middle rounded-[30px] ml-[50px]">
    <div className="flex justify-center flex-row gap-5 dark:bg-gradient-to-t from-darkPrimaryGradient to-darkSecondaryGradient align-middle rounded-[30px] max-w-[500px] w-[300px] min-w-[80%] md:w-[500px]">
      <span className="w-[100px] h-[150px] text-1xl p-5 dark:text-[#fff] justify-center flex  dark:bg-gradient-to-t from-darkPrimaryGradient to-darkSecondaryGradient rounded-[30px] m-auto">
        7 <br />
        <br />
        Years of Experience
      </span>
      <span className="w-[100px] h-[150px]  text-1xl p-5 dark:text-[#fff] justify-center flex dark:bg-gradient-to-t from-darkPrimaryGradient to-darkSecondaryGradient rounded-[30px] m-auto">
        250 <br />
        <br />
        Projects
      </span>
      <span className="w-[100px] h-[150px]  text-1xl p-5 dark:text-[#fff] justify-center flex dark:bg-gradient-to-t from-darkPrimaryGradient to-darkSecondaryGradient rounded-[30px] m-auto">
        7 <br />
        <br />
        Years of Experience
      </span>
    </div>
  </div>
</motion.div>
<motion.div
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  initial={{ opacity: 0, scale: 0.5 }}
  transition={{ ease: "easeIn", duration: 0.5, bounce: 0.5 }}
>
  <div className="flex m-auto max-w-[500px]  min-w-full md:w-[500px] flex-col dark:bg-gradient-to-t from-darkPrimaryGradient to-darkSecondaryGradient min-h-[250px] h-fit rounded-[30px] pl-10">
    <div className="flex flex-col pl-5">
      <Image src={clip} alt="clip" />
      <h1 className="text-3xl text-[#000] dark:text-[#fff]">Let's </h1>
      <br />
      <h1 className="text-3xl text-[#000] dark:text-[#fff]">
        Work <span className="text-3xl text-[#5b78f6]">Together</span>
      </h1>
    </div>
  </div>
</motion.div>
</div> */}