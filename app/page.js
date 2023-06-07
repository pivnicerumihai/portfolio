import Hero from '@/components/Hero/hero'
import MouseTrail from '@/components/MouseTrail/mouseTrail'
import Navbar from '@/components/Navbar/navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='flex flex-col'>

    <MouseTrail/>
   {/* <Navbar /> */}
   <Hero />
   </div>
  )

}
