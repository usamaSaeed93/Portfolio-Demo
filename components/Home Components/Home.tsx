"use client";
import React from "react";
import Image from "next/image";
import hero from "../Assets/Images/Screenshot from 2023-06-08 17-51-48.png";
import "../Components_sass/_home.scss";
import Middle from "./Middle";
import { Box } from "@mui/material";
function Home() {
  //
  return (
    <>
      <div className="flex justify-center flex-col lg:flex-row font-body  w-100 m-auto mb-12 lg:mt-20">
        <div className="flex justify-center h-fit m-auto align-baseline flex-col sm:flex-row  gap-[40px] border-solid rounded-[30px] border-b-darkPrimaryGradient bg-lightGradient  dark:bg-gradient-to-t from-darkPrimaryGradient to-darkSecondaryGradient">
          <div className="flex justify-center align-baseline pt-6 pb-6">
            <Image
              src={hero}
              alt="none"
              className="flex align-middle h-[250px] rounded-[30px]"
              height={250}
            />
          </div>

          <div className="flex justify-center flex-col gap-[20px] p-4">
            <div>
              <span className="text-2xl text-[#9f9f9f]">A web Designer</span>
              <h2 className="text-white text-4xl">Usama Saeed</h2>
              <p className=" text-[#9f9f9f]">
                I am a web developer based in Lahore
              </p>
            </div>
          </div>
        </div>

        <div className="card-side m-auto mt-3 border-solid rounded-[30px] flex-col sm:flex-wrap ">
          <div className="running-line">
            <header className="header ticker-wrapper dark:bg-gradient-to-t from-darkPrimaryGradient to-darkSecondaryGradient">
              <div className="ticker-wrapper__first-half">
                <p>Projects and description is enlisted</p>
                <br />
                <p>Projects and description is enlisted</p>
                <br />
              </div>
              <div className="ticker-wrapper__second-half">
                <p>Projects and description is enlisted</p>
                <br />
                <p>Projects and description is enlisted</p>
                <br />
              </div>
            </header>
          </div>
          <div className="flex flex-col sm:flex-row">
            <div className="credentials  rounded-[30px] bg-[#fff] dark:bg-gradient-to-t from-darkPrimaryGradient to-darkSecondaryGradient m-2">
              <div className="w-background-image cred"></div>
              <div className="lower">
                <span>More About Me</span>
                <p>Projects</p>
              </div>
            </div>
            <div className="projects dark:bg-gradient-to-t from-darkPrimaryGradient to-darkSecondaryGradient m-2 rounded-[30px]">
              <div className="w-background-image proj"></div>
              <div className="lower">
                <span>More About Me</span>
                <p>Projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Middle />
    </>
  );
}

export default Home;
