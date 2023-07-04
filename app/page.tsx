import Image from 'next/image'
import Footer from '@/components/Footer'
import styles from './page.module.css'
import Navbar from '@/components/Navbar'
import Home from '@/components/Home'

import Transition2 from '@/components/Transition2'
export default function RootLayout() {
  return (
  <>
  <Navbar />
    <Home />
   <Footer />
    
  </>
  )
}
