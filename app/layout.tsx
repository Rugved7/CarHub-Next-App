import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import Footer from '@/components/Footer'


export const metadata: Metadata = {
  title: 'CarHub | Cars rentals on Amazing prices',
  description: 'Book, rent or drive a car on super amazing prices',
  keywords: 'car, rent, drive, super, amazing, prices, cars, rentals, rental, car rentals, car rental, rental cars, rental car, car rentals, car rental, rental cars, rental car, car rentals, car rental, rental cars, rental car, car rentals, car rental, rental cars, rental car, car rentals, car rental, rental cars'
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
  
 <body className='relative'>
<Navbar/>
  {children}
  <Footer/>
 </body>
    </html>
  )
}
