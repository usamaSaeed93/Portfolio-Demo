'use client'
import Link from 'next/link'
import React from 'react'
import { useState , useEffect } from 'react'
import logo from '../Assets/Images/28258-8-nike-logo-transparent-background.png'
import Image from 'next/image'
import Switch from '@mui/material/Switch';
import '../Components_sass/navbar.scss'
import { useRouter } from 'next/router';
import ThemeToggle from './ThemeToggle'
function Navbar() {
    return (
        <>
            <nav className='dark mb-[5.5rem] hidden md:flex flex-col md:flex-row'>
                <Link href='/'>
                    <h1 className='text-5xl text-[#000] dark:text-[#fff]'>Grid<span className=' text-5xl' >X</span></h1>
                </Link>
                <div className='nav-links text-[#000] dark:text-[#fff]'>
                    <Link href='/'>
                        Home
                    </Link>
                    <Link href='/about'>
                        About
                    </Link>
                    <Link href='/projects'>
                        Works
                    </Link>
                    <Link href='/contact-us'>
                        Contact
                    </Link>
                </div>
                <Link href='/talk'>
                    <span className='text-[#000] dark:text-[#fff] dark:bg-gradient-to-t from-darkPrimaryGradient to-darkSecondayGradient '>
                        Lets Talk
                    </span>
                </Link>

                {/* <ThemeToggle /> */}
            </nav>
        </>
    )
}

export default Navbar
                // <Switch
                //     checked={checked}
                //     onChange={handleChange}
                //     inputProps={{ 'aria-label': 'controlled' }}
                // />

