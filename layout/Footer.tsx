import React from 'react'
import Link from 'next/link'
function Footer() {
  return (
   <>
  <div className='flex w-100 justify-center items-center flex-col gap-14 mt-14'>
    
  <Link href='/'>
                    <h1 className='text-5xl text-[#000] dark:text-[#fff]'>Grid<span className=' text-5xl' >X</span></h1>
                </Link>
  
  <div className='nav-links text-[#000] flex dark:text-[#fff] justify-center items-center w-1/2 gap-10 mb-14'>
                    <Link href='/'>
                        Home
                    </Link>
                    <Link href='/about'>
                        About
                    </Link>
                    <Link href='/projects'>
                        Works
                    </Link>
                    <Link href='/contact'>
                        Contact
                    </Link>
                </div>
  </div>
  
   </>
  )
}

export default Footer