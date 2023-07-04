import React from 'react'
import Link from 'next/link'
function Footer() {
  return (
   <>
  <div className="flex justify-center">
  <div className='nav-links text-[#000] dark:text-[#fff] justify-evenly'>
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