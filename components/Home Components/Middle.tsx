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
      <div className="flex flex-row md:flex-row flex-wrap justify-evenly align-cenetr gap-10">
        <motion.div
          whileInView={{ opacity: 1, scale: 1, x: -25, y: -20 }}
          viewport={{ once: true }}
          initial={{ opacity: 0, scale: 0.5 }}
          transition={{ ease: "easeIn", duration: 0.5, bounce: 0.5 }}
        >
          <div className="flex flex-col m-auto gap-8 dark:bg-gradient-to-t from-[#202020] to-[#131313] rounded-[30px]  max-w-[300px] md:max-w-[450px] h-[250px] order-1">
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
          className=" sm:max-w-[550px] w-11/12  h-[250px]  justify-between dark:bg-gradient-to-t from-[#202020] to-[#131313] rounded-[30px] order-last md:order-none flex-1"
        >
          <div className="flex items-center justify-evenly space-x-4 mt-10 ">
            <div className="flex items-center justify-center w-12 h-12  rounded-full">
              <CameraIcon className="w-14 h-14 text-white" />
            </div>
            <div className="flex items-center justify-center w-12 h-12  rounded-full">
              <CreateIcon className="w-14 h-14 text-white" />
            </div>
            <div className="flex items-center justify-center w-12 h-12  rounded-full">
              <PaletteIcon className="w-14 h-14 text-white" />
            </div>
            <div className="flex items-center justify-center w-12 h-12  rounded-full">
              <PhoneAndroidIcon className="w-14 h-14 text-white" />
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
              <span className="text-[#000] dark:text-[#fff] text-3xl ">
                Projects
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="flex lg:justify-evenly justify-center items-center flex-col md:flex-row mt-12 lg:mt-20 m-auto w-full gap-10">
        <motion.div
          whileInView={{ opacity: 1, scale: 1, x: -25, y: -20 }}
          viewport={{ once: true }}
          initial={{ opacity: 0, scale: 0.5 }}
          transition={{ ease: "easeIn", duration: 0.5, bounce: 0.5 }}
          className="sm:max-w-[550px] w-11/12  flex h-[200px] flex-row justify-between dark:bg-gradient-to-t from-[#202020] to-[#131313] rounded-[30px]"
        >
          <div className="w-[100px] h-[150px]  flex-col text-sm p-5 dark:text-[#fff] justify-center flex  dark:bg-gradient-to-t from-darkPrimaryGradient to-darkSecondaryGradient rounded-[30px] m-auto">
            <span>07</span>
            <br />
            <span>Years of Experience</span>
          </div>
          <div className="w-[100px] h-[150px]  flex-col  text-sm  p-5 dark:text-[#fff] justify-center flex dark:bg-gradient-to-t from-darkPrimaryGradient to-darkSecondaryGradient rounded-[30px] m-auto">
            <span>07</span>
            <br />
            <span>Years of Experience</span>
          </div>
          <div className="w-[100px] h-[150px]  flex-col  text-sm  p-5 dark:text-[#fff] justify-center flex dark:bg-gradient-to-t from-darkPrimaryGradient to-darkSecondaryGradient rounded-[30px] m-auto">
            <span>07</span>
            <br />
            <span>Years of Experience</span>
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, scale: 1, x: -25, y: -20 }}
          viewport={{ once: true }}
          initial={{ opacity: 0, scale: 0.5 }}
          transition={{ ease: "easeIn", duration: 0.5, bounce: 0.5 }}
          className="sm:max-w-[550px] w-11/12  h-[200px]  justify-between dark:bg-gradient-to-t from-[#202020] to-[#131313] rounded-[30px]"
        >
          <div className="flex flex-col pl-5">
            <Image src={clip} alt="clip" />
            <h1 className="text-3xl text-[#000] dark:text-[#fff]">Let's </h1>
            <br />
            <h1 className="text-3xl text-[#000] dark:text-[#fff]">
              Work <span className="text-3xl text-[#5b78f6]">Together</span>
            </h1>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Middle;
