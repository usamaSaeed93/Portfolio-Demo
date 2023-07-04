"use client";
import "../../components/Components_sass/_home.scss";
import image from "../../Assets/Images/gibraltar-ocean-boy-gradient.jpg";
import { motion } from "framer-motion";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import iconAni from "../../Assets/Images/iconAni.png";
import Image from "next/image";
import Navbar from "@/layout/Navbar";
import me2 from "../../Assets/Images/me2.png";
import clip from "../../Assets/Images/clip.png";
export default function page() {
  const iconStyle = {
    color: "#fff",
    fontSize: "60px",
  };
  return (
    <>
      <Navbar />
      <div className="w-[85%] m-auto mt-14">

      
      <div className="flex flex-col justify-center  w-full">
        <motion.div
          whileInView={{ opacity: 1, scale: 1, x: -25, y: -20 }}
          viewport={{ once: true }}
          initial={{ opacity: 0, scale: 0.5 }}
          transition={{ ease: "easeIn", duration: 0.5, bounce: 0.5 }}
          className="flex justify-center m-auto
                "
        >
          <div className="flex flex-col md:flex-row justify-center align-baseline md:justify-evenly">
            <div className=" flex m-auto felx-col md:flex-row justify-center align-middle bg-[#fff] dark:bg-gradient-to-t from-darkPrimaryGradient to-darkSecondaryGradient w-[320px] h-[320px]  rounded-[30px] lg:w-[450px] lg:h-[420px] ">
              <Image
                src={me2}
                alt="none"
                width={280}
                height={280}
                className="rounded-[30px] p-5 w-[280px] h-[280px] lg:w-[350px] lg:h-[350px] bg-[#5B78F6] m-auto"
              />
            </div>

            <div className="flex flex-col w-[80%] lg:w-[40%] md:w-[40%] justify-center m-auto ">
              <h1 className="text-4xl md:5xl mb-3">Summary</h1>
              <div className="flex justify-center flex-col   dark:bg-gradient-to-t from-darkPrimaryGradient to-darkSecondaryGradient rounded-[30px] ">
                <Image src={clip} alt="clip" />

                <h2 className="text-4xl md:text-6xl dark:text-white  p-5 text-black ">
                  Usama Saeed
                </h2>
                <p className="text-1xl break-words  md:text-1xl dark:text-white  p-5 text-black  w-[100%]">
                  I am a San francisco-based product designer with a focus on
                  web design, illustration, a visual development. I have a
                  diverse range of experience having worked across various
                  fields and industries.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-center md:justify-evenly items-center my-10 ">
          <motion.div
            whileInView={{ opacity: 1, scale: 1, x: -25, y: -20 }}
            viewport={{ once: true }}
            initial={{ opacity: 0, scale: 0.5 }}
            transition={{ ease: "easeIn", duration: 0.5, bounce: 0.5 }}
          >
            <div className="flex flex-col justify-start p-8 dark:bg-gradient-to-t from-darkPrimaryGradient to-darkSecondaryGradient rounded-[30px] m-auto w-full">
              <h1 className="text-4xl  text-[#60a5fa] dark:text-[#9ca3af] ">
                Experience
              </h1>
              <span className="text-2xl text-[#374151] pb-5 pt-2 ">
                2017-2023
              </span>
              <h1 className="text-4xl  text-[#60a5fa] dark:text-[#9ca3af]  pb-2">
                Frontend Developer
              </h1>
              <span className="text-2xl text-[#374151] pb-5 pt-2 ">
                Bluebase Designs
              </span>
              <span className="text-2xl text-[#374151] pb-5 pt-2 ">
                2017-2023
              </span>
              <h1 className="text-4xl  text-[#60a5fa] dark:text-[#9ca3af]  pb-2">
                Frontend Developer
              </h1>
              <span className="text-2xl text-[#374151] pb-5 pt-2 ">
                Bluebase Designs
              </span>
            </div>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, scale: 1, x: -25, y: -20 }}
            viewport={{ once: true }}
            initial={{ opacity: 0, scale: 0.5 }}
            transition={{ ease: "easeIn", duration: 0.5, bounce: 0.5 }}
          >
            <div className="flex flex-col justify-start p-8 dark:bg-gradient-to-t from-darkPrimaryGradient to-darkSecondaryGradient rounded-[30px] m-auto w-full ">
              <h1 className="text-4xl text-[#60a5fa] dark:text-[#9ca3af]">
                Experience
              </h1>
              <span className="text-2xl text-[#374151] pb-5 pt-2 ">
                2017-2023
              </span>
              <h1 className="text-4xl text-[#60a5fa] dark:text-[#9ca3af] pb-2">
                Frontend Developer
              </h1>
              <span className="text-2xl text-[#374151] pb-5 pt-2 ">
                Bluebase Designs
              </span>
              <span className="text-2xl text-[#374151] pb-5 pt-2 ">
                2017-2023
              </span>
              <h1 className="text-4xl text-[#60a5fa] dark:text-[#9ca3af] pb-2">
                Frontend Developer
              </h1>
              <span className="text-2xl text-[#374151] pb-5 pt-2 ">
                Bluebase Designs
              </span>
            </div>
          </motion.div>
        </div>

        
      <div className="flex flex-row md:flex-row flex-wrap justify-evenly align-cenetr gap-10">
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

        
        <motion.div
          whileInView={{ opacity: 1, scale: 1, x: -25, y: -20 }}
          viewport={{ once: true }}
          initial={{ opacity: 0, scale: 0.5 }}
          transition={{ ease: "easeIn", duration: 0.5, bounce: 0.5 }}
          className="sm:max-w-[550px] w-11/12  h-[250px]  justify-between dark:bg-gradient-to-t from-[#202020] to-[#131313] rounded-[30px] order-last md:order-none flex-1"
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
      </div>
      </div>
    </>
  );
}
