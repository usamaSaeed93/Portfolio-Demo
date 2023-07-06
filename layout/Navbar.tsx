"use client";
import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
import logo from "../Assets/Images/28258-8-nike-logo-transparent-background.png";
import Image from "next/image";
import Switch from "@mui/material/Switch";
import "../components/Components_sass/navbar.scss";
import { useRouter } from "next/router";
import ThemeToggle from "./ThemeToggle";
function Navbar() {
  function handleTheme() {
    document.documentElement.classList.remove("dark");
  }
  return (
    <>
      <nav className="  flex flex-row md:flex-row pt-10 pb-10">
        <Link href="/">
          <h1 className="text-6xl text-[#fff]">
            Grid<span className=" ">X</span>
          </h1>
        </Link>
        <div className="nav-links  text-[#fff]  hidden md:flex">
          <Link
            href="/"
            className=" text-white"
            onClick={handleTheme}
          >
            Home
          </Link>
          <Link href="/about" className=" text-white">
            About
          </Link>
          <Link href="/projects" className=" text-white">
            Works
          </Link>
          <Link href="/contact-us" className=" text-white">
            Contact
          </Link>
        </div>
        <Link href="/talk">
          <span className="text-[#fff] dark:bg-gradient-to-t from-darkPrimaryGradient to-darkSecondayGradient ">
            Lets Talk
          </span>
        </Link>

        <ThemeToggle />
      </nav>
    </>
  );
}

export default Navbar;
