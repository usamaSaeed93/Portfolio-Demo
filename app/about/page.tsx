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
import Footer from "@/layout/Footer";
export default function page() {
  if (typeof window !== 'undefined') {
    let myVariable = localStorage.getItem('dark') 
    if(myVariable==="False"){
      document.documentElement.classList.remove('dark');
    }
  }
  const iconStyle = {
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
            <div className="flex flex-col sm:flex-row justify-center align-baseline md:justify-evenly gap-x-[5%]">
              <div className=" flex m-auto felx-col md:flex-row justify-center align-middle background__divs w-[320px] h-[280px] p-4 rounded-[30px] lg:w-[450px] lg:h-[420px] ">
                <Image
                  src={me2}
                  alt="none"
                  width={280}
                  height={280}
                  className="rounded-[30px] p-5 w-[280px]  lg:w-[350px] lg:h-[350px] bg-[#5B78F6] m-auto h-auto md:h-[260px]"
                />
              </div>

              <div className="flex flex-col w-[80%] lg:w-[40%] md:w-[40%] justify-center m-auto ">
                <h1 className="text-4xl md:5xl mb-3 m-auto mt-4">Summary</h1>
                <div className="flex justify-center flex-col   background__divs rounded-[30px] ">
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
          <div className="flex flex-col sm:flex-row ml-auto justify-center md:justify-evenly items-center my-10 gap-y-10 gap-x-4">
            <motion.div
              whileInView={{ opacity: 1, scale: 1, x: -25, y: -20 }}
              viewport={{ once: true }}
              initial={{ opacity: 0, scale: 0.5 }}
              transition={{ ease: "easeIn", duration: 0.5, bounce: 0.5 }}
            >
              <div className="flex flex-col justify-start p-8 background__divs rounded-[30px] m-auto lg:w-[550px] ml-[50px]">
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
              <div className="flex flex-col justify-start p-8 background__divs rounded-[30px] m-auto lg:w-[550px] ml-[50px]  ">
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
            <motion.div
              whileInView={{ opacity: 1, scale: 1, x: -25, y: -20 }}
              viewport={{ once: true }}
              initial={{ opacity: 0, scale: 0.5 }}
              transition={{ ease: "easeIn", duration: 0.5, bounce: 0.5 }}
              className="sm:max-w-[550px] w-11/12  h-[200px]  justify-between background__divs rounded-[30px] ml-auto"
            >
              <div className="flex flex-col pl-5">
                <Image src={clip} alt="clip" />
                <h1 className="text-3xl text-[#000] dark:text-[#fff]">
                  Let's{" "}
                </h1>
                <br />
                <h1 className="text-3xl text-[#000] dark:text-[#fff]">
                  Work <span className="text-3xl text-[#5b78f6]">Together</span>
                </h1>
              </div>
            </motion.div>
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
          ;
        </div>
      </div>
      <Footer />
    </>
  );
}
