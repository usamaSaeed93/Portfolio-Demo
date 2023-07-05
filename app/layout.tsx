import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className=' bg-[#f7f9fc] dark:bg-[#0f0f0f]'>
      <body className=' bg-[#f7f9fc] dark:bg-[#000]' >{children}</body>
    </html>
  )
}
