import React from 'react'
import Link from 'next/link'
function Footer() {
  return (
   <>
  <div className='flex w-100 justify-center items-center flex-col gap-14 mt-10'>
  <Link href='/'>
                    <h1 className='text-[60px] text-[#000] dark:text-[#fff] mb-10'>Grid<span className=' text-5xl' >X</span></h1>
                </Link>
  
  <div className=' text-[#000] flex dark:text-[#fff] justify-center items-center w-1/2 gap-10 mb-10'>
                    <Link href='/' className='text-black dark:text-white'>
                        Home
                    </Link>
                    <Link href='/about' className='text-black dark:text-white'>
                        About
                    </Link>
                    <Link href='/projects' className='text-black dark:text-white'>
                        Works
                    </Link>
                    <Link href='/contact' className='text-black dark:text-white'>
                        Contact
                    </Link>
                </div>
  </div>
  
   </>
  )
}

export default Footer