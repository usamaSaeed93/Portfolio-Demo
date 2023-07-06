import React from 'react'
import Link from 'next/link'
function Footer() {
  return (
   <>
  <div className='flex w-100 justify-center items-center flex-col gap-14 mt-10'>
  <Link href='/'>
                    <h1 className='text-3xl text-[#fff] mb-10'>Grid<span className=' text-3xl' >X</span></h1>
                </Link>
  
  <div className=' flex text-[#fff] justify-center items-center w-1/2 gap-10 mb-10'>
                    <Link href='/' className='text-white'>
                        Home
                    </Link>
                    <Link href='/about' className='text-white'>
                        About
                    </Link>
                    <Link href='/projects' className='text-white'>
                        Works
                    </Link>
                    <Link href='/contact' className='text-white'>
                        Contact
                    </Link>
                </div>
  </div>
  
   </>
  )
}

export default Footer