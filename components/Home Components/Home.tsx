
import React from "react";
import Image from "next/image";
import hero from "../../Assets/Images/Screenshot from 2023-06-08 17-51-48.png";
import "../Components_sass/_home.scss";
import Middle from "./Middle";

import Footer from "@/layout/Footer";
function Home() {
  if (typeof window !== 'undefined') {
    let myVariable = localStorage.getItem('dark') 
    if(myVariable==="False"){
      document.documentElement.classList.remove('dark');
    }
  }

  return (
    <>
      <div className="flex flex-col ">
        <div className="flex justify-center flex-col lg:flex-row font-body  w-full  mb-12 lg:mt-20 gap-4">
          <div className="flex justify-center h-full m-auto  flex-col  sm:flex-row  border-solid rounded-[30px]  background__divs md:w-[60%]">
            <div className="flex justify-center align-baseline p-6 w-full">
              <Image
                src={hero}
                alt="none"
                className="flex align-middle h-full  rounded-[30px]"
               width={260}
              />
            </div>

            <div className="flex justify-center flex-col gap-[20px] lg:pr-10 items-start">
             
                <span className=" home__writtings">A web Designer</span>
                <h2 className="home__headings">Usama Saeed</h2>
                <p className=" home__writtings sm:w-max md:w-full">
                  I am a web developer based in Lahore
                </p>
             
            </div>
          </div>

          <div className="card-side  mt-3 border-solid rounded-[30px] flex-col sm:flex-wrap lg:w-[50%] w-[100%] h-fit">
            <div className="running-line">
              <header className="header ticker-wrapper background__divs">
                <div className="ticker-wrapper__first-half text-white dark:text-[#535353]">
                  <p>Projects and description enlisted</p>
                  <br />
                  <p>Projects and description enlisted</p>
                  <br />
                </div>
                <div className="ticker-wrapper__second-half text-white dark:text-[#535353]">
                  <p>Projects and description enlisted</p>
                  <br />
                  <p>Projects and description enlisted</p>
                  <br />
                </div>
              </header>
            </div>
            <div className="flex flex-col sm:flex-row gap-y-10 gap-x-10">
              <div className="rough rounded-[30px] background__divs ">
                <div className="w-background-image cred"></div>
                <div className="lower mb-4">
                  <span className="home__smallwrittings">More About Me</span>
                  <p className="home__writtings_divs">Projects</p>
                </div>
              </div>
              <div className="rough background__divs m-2 rounded-[30px]">
                <div className="w-background-image proj"></div>
                <div className="lower mb-4">
                  <span className="home__smallwrittings">More About Me</span>
                  <p className="home__writtings_divs">Projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Middle />
      </div>
    </>
  );
}

export default Home;
