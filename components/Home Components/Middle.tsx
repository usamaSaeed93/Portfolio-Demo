"use client";
import React from "react";
import "../../app/globals.css"
import Image from "next/image";
// import '../Components_sass/_home'
import { motion } from "framer-motion";
import clip from "../../Assets/Images/clip.png";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import DrawOutlinedIcon from "@mui/icons-material/DrawOutlined";
import PaletteOutlinedIcon from "@mui/icons-material/PaletteOutlined";
import DevicesOutlinedIcon from "@mui/icons-material/DevicesOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import iconAni from "../../Assets/Images/iconAni.png";
import CameraIcon from "@mui/icons-material/Camera";
import CreateIcon from "@mui/icons-material/Create";
import PaletteIcon from "@mui/icons-material/Palette";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const iconStyle = {
  
  fontSize: "60px",
};
function Middle() {
  return (
    <>
      <div className="flex flex-row md:flex-row  justify-evenly  gap-10 lg:flex hidden  ">
        <motion.div
          whileInView={{ opacity: 1, scale: 1, x: -25, y: -20 }}
          viewport={{ once: true }}
          initial={{ opacity: 0, scale: 0.5 }}
          transition={{ ease: "easeIn", duration: 0.5, bounce: 0.5 }}
        >
          <div className="flex flex-col gap-8  background__divs rounded-[30px] rough order-1">
            <Image src={iconAni} alt="none" />
            <div className="flex flex-col gap-1">
              <span className="text-[#fff] text-3xl pl-10">
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
          className=" sm:max-w-[550px] w-11/12  h-[250px]  justify-between background__divs rounded-[30px] order-last md:order-none flex-1"
        >
          <div className="flex items-center justify-evenly space-x-4 mt-10 ">
            <div className="flex items-center justify-center w-12 h-12  rounded-full">
              <CameraIcon className="icons__text color__icons" />
            </div>
            <div className="flex items-center justify-center w-12 h-12  rounded-full">
              <CreateIcon className="icons__text color__icons" />
            </div>
            <div className="flex items-center justify-center w-12 h-12  rounded-full">
              <PaletteIcon className="icons__text color__icons" />
            </div>
            <div className="flex items-center justify-center w-12 h-12  rounded-full">
              <PhoneAndroidIcon className="icons__text color__icons" />
            </div>
          </div>
          <div className="mt-4 flex items-baseline justify-between p-6 ">
          <div>
            <h3 className="home__smallwrittings">Specialization</h3>
            <h3 className="home__writtings_divs">Services Offerings</h3>
          </div>
            <div className="w-8 h-8  rounded-full hover:bg-white transition-colors">
              <ArrowForwardIosIcon className="w-4 h-4 text-[#09aaf3]" />
            </div>
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, scale: 1, x: -25, y: -20 }}
          viewport={{ once: true }}
          initial={{ opacity: 0, scale: 0.5 }}
          transition={{ ease: "easeIn", duration: 0.5, bounce: 0.5 }}
          className="flex"
        >
          <div className="flex m-auto flex-col background__divs rounded-[30px] w-[280px] md:max-w-[400px] h-[250px] order-none ">
            <div className="flex flex-row  align-middle p-4 justify-center">
              <div className="hover:bg-white transition duration-0.3s rounded-full p-2">
                <SportsBasketballOutlinedIcon
                  style={iconStyle}
                  className="color__icons"
                />
              </div>
              <div className="hover:bg-white transition duration-0.3s rounded-full p-2 ">
                <TwitterIcon style={iconStyle} className="color__icons" />
              </div>
            </div>
            <div className="flex flex-col gap-1 ml-3">
              <span className="text-[#fff] text-1xl mt-4">
                Stay with Me
              </span>
              <span className="text-[#fff] text-3xl ">
                Projects
              </span>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="flex flex-col md:flex-row md:hidden ">
        <div className="flex flex-col sm:flex-row gap-10">
          <div className="rough rounded-[30px] background__divs m-2">
            <div className="w-background-image ">
              <Image src={iconAni} alt="none" />
            </div>
            <div className="lower mb-4">
                  <span className="home__smallwrittings">More About Me</span>
                  <p className="home__writtings_divs">Projects</p>
                </div>
          </div>
          <div className="rough background__divs m-2 rounded-[30px]">
            <div className="w-background-image ">
              <div className="flex flex-row  align-middle p-4 justify-center">
                <div className=" transition duration-0.3s rounded-full p-2">
                  <SportsBasketballOutlinedIcon
                    style={iconStyle}
                    className="color__icons"
                  />
                </div>
                <div className=" transition duration-0.3s rounded-full p-2 ">
                  <TwitterIcon style={iconStyle} className="color__icons" />
                </div>
              </div>
              <div className="lower mb-4">
                  <span className="home__smallwrittings">More About Me</span>
                  <p className="home__writtings_divs">Projects</p>
                </div>
            </div>
          </div>
        </div>
    
      <motion.div
        whileInView={{ opacity: 1, scale: 1, x: -25, y: -20 }}
        viewport={{ once: true }}
        initial={{ opacity: 0, scale: 0.5 }}
        transition={{ ease: "easeIn", duration: 0.5, bounce: 0.5 }}
        className=" sm:max-w-[550px] w-[90%]  h-[200px]  justify-between background__divs rounded-[30px] mt-10 ml-auto  sm:m-auto sm:mt-10"
      >
        <div className="flex items-center justify-evenly space-x-4 mt-10 ">
          <div className="flex items-center justify-center w-12 h-12  rounded-full">
            <CameraIcon className="icons__text " />
          </div>
          <div className="flex items-center justify-center w-12 h-12  rounded-full">
            <CreateIcon className="icons__text " />
          </div>
          <div className="flex items-center justify-center w-12 h-12  rounded-full">
            <PaletteIcon className="icons__text " />
          </div>
          <div className="flex items-center justify-center w-12 h-12  rounded-full">
            <PhoneAndroidIcon className="icons__text " />
          </div>
        </div>
        <div className="mt-8 flex items-baseline justify-between p-6 ">
          <div>
            <h3 className="home__smallwrittings">Specialization</h3>
            <h3 className="home__writtings_divs">Services Offerings</h3>
          </div>
          <div className="w-8 h-8 rounded-full hover:bg-white transition-colors">
            <ArrowForwardIosIcon className="w-4 h-4 text-white" />
          </div>
        </div>
      </motion.div>
      </div>
      <div className="flex lg:justify-evenly justify-center items-center flex-col md:flex-row mt-12 lg:mt-20 m-auto w-full gap-10 ml-4">
        <motion.div
          whileInView={{ opacity: 1, scale: 1, x: -25, y: -20 }}
          viewport={{ once: true }}
          initial={{ opacity: 0, scale: 0.5 }}
          transition={{ ease: "easeIn", duration: 0.5, bounce: 0.5 }}
          className="sm:max-w-[550px] w-[90%] flex-row flex h-[200px]  justify-between background__divs rounded-[30px]"
        >
          <div className="w-[30%] sm:w-max h-[150px]  flex-col text-sm p-5 text-[#fff] justify-center flex bg-lightPrimaryGradient  dark:bg-gradient-to-t from-darkPrimaryGradient to-darkSecondaryGradient rounded-[30px] m-auto">
            <span className="m-auto">07</span>
            
            <span className="text-8px md:font-extrabold md:text-[15px] mt-3 m-auto">Years of Experience</span>
          </div>
          <div className="w-[30%] sm:w-max h-[150px]  flex-col text-sm p-5 text-[#fff] justify-center flex bg-lightPrimaryGradient  dark:bg-gradient-to-t from-darkPrimaryGradient to-darkSecondaryGradient rounded-[30px] m-auto">
            <span className="m-auto">07</span>
            
            <span className="text-8px md:font-extrabold md:text-[15px] mt-3 m-auto">Years of Experience</span>
          </div>
          <div className="w-[30%] sm:w-max h-[150px]  flex-col text-sm p-5 text-[#fff] justify-center flex bg-lightPrimaryGradient  dark:bg-gradient-to-t from-darkPrimaryGradient to-darkSecondaryGradient rounded-[30px] m-auto">
            <span className="m-auto">07</span>
            
            <span className="text-8px md:font-extrabold md:text-[15px] mt-3 m-auto">Years of Experience</span>
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, scale: 1, x: -25, y: -20 }}
          viewport={{ once: true }}
          initial={{ opacity: 0, scale: 0.5 }}
          transition={{ ease: "easeIn", duration: 0.5, bounce: 0.5 }}
          className="sm:max-w-[550px] w-11/12  h-[200px]  justify-between background__divs rounded-[30px]"
        >
          <div className="flex flex-col pl-5">
            <Image src={clip} alt="clip" />
            <h1 className="text-3xl text-[#fff]">Let's </h1>
            <br />
            <h1 className="text-3xl text-[#fff]">
              Work <span className="text-3xl text-[#5b78f6]">Together</span>
            </h1>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Middle;
{
  /* <div className="flex flex-row md:flex-row flex-wrap justify-evenly  gap-10">
  <motion.div
    whileInView={{ opacity: 1, scale: 1, x: -25, y: -20 }}
    viewport={{ once: true }}
    initial={{ opacity: 0, scale: 0.5 }}
    transition={{ ease: "easeIn", duration: 0.5, bounce: 0.5 }}
  >
    <div className="flex flex-col gap-8 dark:bg-gradient-to-t from-[#202020] to-[#131313] rounded-[30px] rough order-1">
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
    className="flex"
  >
    <div className="flex m-auto flex-col dark:bg-gradient-to-t from-[#202020] to-[#131313] rounded-[30px] w-[280px] md:max-w-[400px] h-[250px] order-none ">
      <div className="flex flex-row  align-middle p-4 justify-center">
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
      <div className="flex flex-col gap-1 ml-3">
        <span className="text-[#000] dark:text-[#fff] text-1xl mt-4">
          Stay with Me
        </span>
        <span className="text-[#000] dark:text-[#fff] text-3xl ">Projects</span>
      </div>
    </div>
  </motion.div>
  <motion.div
    whileInView={{ opacity: 1, scale: 1, x: -25, y: -20 }}
    viewport={{ once: true }}
    initial={{ opacity: 0, scale: 0.5 }}
    transition={{ ease: "easeIn", duration: 0.5, bounce: 0.5 }}
    className=" sm:max-w-[550px] w-11/12  h-[250px]  justify-between dark:bg-gradient-to-t from-[#202020] to-[#131313] rounded-[30px] order-last md:order-none flex-1"
  >
    <div className="flex items-center justify-evenly space-x-4 mt-10 ">
      <div className="flex items-center justify-center w-12 h-12  rounded-full">
        <CameraIcon className="icons__text text-white" />
      </div>
      <div className="flex items-center justify-center w-12 h-12  rounded-full">
        <CreateIcon className="icons__text text-white" />
      </div>
      <div className="flex items-center justify-center w-12 h-12  rounded-full">
        <PaletteIcon className="icons__text text-white" />
      </div>
      <div className="flex items-center justify-center w-12 h-12  rounded-full">
        <PhoneAndroidIcon className="icons__text text-white" />
      </div>
    </div>
    <div className="mt-4 flex items-baseline justify-between p-6 ">
      <div>
        <h3 className="text-lg font-medium text-white">Specialization</h3>
        <h3 className="text-lg font-xl text-white">Services Offerings</h3>
      </div>
      <div className="w-8 h-8 bg-white rounded-full hover:bg-white transition-colors">
        <ArrowForwardIosIcon className="w-4 h-4 text-white" />
      </div>
    </div>
  </motion.div>
</div>; */
}
