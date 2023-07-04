import Image from 'next/image'
import Footer from '@/layout/Footer'
import styles from './page.module.css'
import Navbar from '@/layout/Navbar'
import Home from '@/components/Home Components/Home'
export default function RootLayout() {
  return (
  <>

  <Navbar />
  <div className='w-[85%] items-center m-auto'>
    <Home />
  </div>
   <Footer />
    
  </>
  )
}
