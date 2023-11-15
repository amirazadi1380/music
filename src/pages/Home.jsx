import React from 'react'
import Navbar from '../components/Navbar'
import Signup from '../components/Signup'
import Instruments from '../components/Instruments'
import Footer from '../components/Footer'
import Test from '../components/Test'
import Categories from '../components/Categories'
import { Link } from 'react-router-dom'
import SliderOne from '../components/SliderOne'

export default function Home() {
  return (
      
      <div className='flex flex-col overflow-x-hidden bg-gradient-to-r w-screen h-auto '>
        <div className='backg absolute'>
        </div>
        <Navbar/>
        <SliderOne/>
        <Signup/>
        <Instruments/>
        <Categories/>
    </div>
  )
}
