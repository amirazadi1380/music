import React, { useContext, useState } from 'react'
import {AppContext} from '../App'
import { useParams } from 'react-router-dom'

export default function ViolinDetails() {
    const {price} = useParams()
    const {myProducts} = useContext(AppContext)
    const [customIdx,setCustomIdx] = useState(0)
  return (
    <div  className='flex w-screen h-screen justify-center items-center bg-gradient-to-r from-slate-400 to-slate-950'>
        {myProducts.filter(item=>item.category == 'violin').filter(item=>item.price == price).map((item)=><div onClick={()=>navigate(`${item.price}`)} className='bg-black/90 w-60 h-60 rounded-md flex items-center lg:w-96 lg:h-[400px] relative justify-center my-10 lg:my-0 space-y-5' key={Math.random()*1000}>
          <img src="./images/m6.jpg" alt="bac" className='absolute z-0 blur object-cover w-76 h-72' />

          <div className='flex flex-col  items-center pr-2  z-10 space-y-5 relative'>   
          <img src={item.seconds} alt="dsa" className='rounded-xl object-contain w-48 h-60 md:w-64 absolute md:h-72 md:-top-72 -top-56 opacity-90 hover:opacity-100 duration-150 ease-linear' />   
            <h1 className='font-bold text-xl md:text-5xl'>{item.title}</h1>
            <p className='text-center text-yellow-200 opacity-70'>{item.description}</p>
            <p className='text-yellow-300'>{item.price} $</p>
            <button className='bg-white text-black w-20 md:w-28  duration-200 hover:w-52 md:h-8  ease-in font-semibold '>خرید</button>
          </div>

        </div>)}
     </div>
  )
}
