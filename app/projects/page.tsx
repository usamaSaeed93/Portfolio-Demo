"use client";
import React from "react";
import Navbar from "@/layout/Navbar";
import Image from "next/image";
import { motion } from "framer-motion";
import image1 from "../../Assets/Images/Project Images/project3.jpeg";
import image2 from "../../Assets/Images/Project Images/project4.jpeg";
import image3 from "../../Assets/Images/Project Images/project5.jpeg";
import image4 from "../../Assets/Images/Project Images/project6.jpeg";
import Footer from "@/layout/Footer";
function page() {
    if (typeof window !== 'undefined') {
        let myVariable = localStorage.getItem('dark') 
        if(myVariable==="False"){
          document.documentElement.classList.remove('dark');
        }
      }
    return (
        <>
            <Navbar />
            <div className="flex flex-col md:flex-row justify-evenly m-auto items-center">
                <div className="flex flex-col gap-6 items-center">
                    <motion.div
                        whileInView={{ opacity: 1, scale: 1, x: -25, y: -20 }}
                        viewport={{ once: true }}
                        initial={{ opacity: 0, scale: 0.5 }}
                        transition={{ ease: "easeIn", duration: 0.5, bounce: 0.5 }}
                    >
                        <h1 className="m-auto text-6xl text-[#808080] flex md:hidden my-10 ">
                            All Projects
                        </h1>
                        <div className="flex flex-col rounded-[30px] w-[366px] h-[400px] bg justify-center align-top ">
                            <Image
                                src={image1}
                                alt="none"
                                width={320}
                                height={350}
                                className="rounded-[30px] m-auto"
                            />
                            <div className="flex flex-col pl-4 pb-3">
                                <span className="text-1xl text-[#808080]">WEb Designing</span>
                                <p className="text-2xl text-[#000] dark:text-[#fff]">Dynamic</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        whileInView={{ opacity: 1, scale: 1, x: -25, y: -20 }}
                        viewport={{ once: true }}
                        initial={{ opacity: 0, scale: 0.5 }}
                        transition={{ ease: "easeIn", duration: 0.5, bounce: 0.5 }}
                    >
                        <div className="flex flex-col rounded-[30px] w-[366px] h-[500px] dark:bg-gradient-to-t from-darkPrimaryGradient to-darkSecondaryGradient justify-center align-top ">
                            <Image
                                src={image2}
                                alt="none"
                                width={320}
                                height={450}
                                className="rounded-[30px] m-auto"
                            />
                            <div className="flex flex-col pl-4 pb-3">
                                <span className="text-1xl text-[#808080]">WEb Designing</span>
                                <p className="text-2xl text-[#000] dark:text-[#fff]">Dynamic</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
                <div className="flex flex-col justify-center gap-8 mt-5 items-center">
                    <h1 className="m-auto text-6xl text-[#808080] hidden md:flex mb-10">
                        All Projects
                    </h1>
                    <div className="flex flex-col lg:flex-row justify-center gap-5">
                        <motion.div
                            whileInView={{ opacity: 1, scale: 1, x: -25, y: -20 }}
                            viewport={{ once: true }}
                            initial={{ opacity: 0, scale: 0.5 }}
                            transition={{ ease: "easeIn", duration: 0.5, bounce: 0.5 }}
                        >
                            <div className="flex flex-col rounded-[30px] w-[366px] h-[400px] dark:bg-gradient-to-t from-darkPrimaryGradient to-darkSecondaryGradient justify-center align-top ">
                                <Image
                                    src={image4}
                                    alt="none"
                                    width={320}
                                    height={350}
                                    className="rounded-[30px] m-auto"
                                />
                                <div className="flex flex-col pl-4 pb-3">
                                    <span className="text-1xl text-[#808080]">WEb Designing</span>
                                    <p className="text-2xl text-[#000] dark:text-[#fff]">
                                        Dynamic
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            whileInView={{ opacity: 1, scale: 1, x: -25, y: -20 }}
                            viewport={{ once: true }}
                            initial={{ opacity: 0, scale: 0.5 }}
                            transition={{ ease: "easeIn", duration: 0.5, bounce: 0.5 }}
                        >
                            <div className="flex flex-col rounded-[30px] w-[366px] h-[400px] dark:bg-gradient-to-t from-darkPrimaryGradient to-darkSecondaryGradient justify-center align-top ">
                                <Image
                                    src={image1}
                                    alt="none"
                                    width={320}
                                    height={350}
                                    className="rounded-[30px] m-auto"
                                />
                                <div className="flex flex-col pl-4 pb-3">
                                    <span className="text-1xl text-[#808080]">WEb Designing</span>
                                    <p className="text-2xl text-[#000] dark:text-[#fff]">
                                        Dynamic
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-center gap-5 m-auto items-center">
                        <motion.div
                            whileInView={{ opacity: 1, scale: 1, x: -25, y: -20 }}
                            viewport={{ once: true }}
                            initial={{ opacity: 0, scale: 0.5 }}
                            transition={{ ease: "easeIn", duration: 0.5, bounce: 0.5 }}
                        >
                            <div className="flex flex-col rounded-[30px] w-[366px] h-[400px] dark:bg-gradient-to-t from-darkPrimaryGradient to-darkSecondaryGradient justify-center align-top ">
                                <Image
                                    src={image1}
                                    alt="none"
                                    width={320}
                                    height={350}
                                    className="rounded-[30px] m-auto"
                                />
                                <div className="flex flex-col pl-4 pb-3">
                                    <span className="text-1xl text-[#808080]">WEb Designing</span>
                                    <p className="text-2xl text-[#000] dark:text-[#fff]">
                                        Dynamic
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            whileInView={{ opacity: 1, scale: 1, x: -25, y: -20 }}
                            viewport={{ once: true }}
                            initial={{ opacity: 0, scale: 0.5 }}
                            transition={{ ease: "easeIn", duration: 0.5, bounce: 0.5 }}
                        >
                            <div className="flex flex-col rounded-[30px] w-[366px] h-[400px] dark:bg-gradient-to-t from-darkPrimaryGradient to-darkSecondaryGradient justify-center align-top ">
                                <Image
                                    src={image3}
                                    alt="none"
                                    width={320}
                                    height={350}
                                    className="rounded-[30px] m-auto"
                                />
                                <div className="flex flex-col pl-4 pb-3">
                                    <span className="text-1xl text-[#808080]">WEb Designing</span>
                                    <p className="text-2xl text-[#000] dark:text-[#fff]">
                                        Dynamic
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default page;
