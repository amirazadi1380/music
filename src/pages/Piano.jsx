import React, { useContext } from 'react'
import {AppContext} from '../App'
import { useNavigate } from 'react-router-dom'

export default function Piano() {
  const {teachers,myProducts} = useContext(AppContext)
  const navigate = useNavigate()
  
  return (
    <div className='grid grid-cols-1 md:pt-10 gap-4 md:gap-32 place-items-center mt-0 md:grid-cols-2 relative' >
      <div className='backp absolute -z-20'>

      </div>
        {myProducts.filter(item=>item.category == 'piano').map((item)=><div  className='bg-black/90 w-60 h-60 rounded-md flex items-center lg:w-96 lg:h-[400px] relative justify-center my-10 lg:my-0 space-y-5' key={Math.random()*1000}>
          <img src="./images/m6.jpg" alt="bac" className='absolute z-0 blur object-cover w-76 h-72' />

          <div className='flex flex-col  items-center pr-2  z-10 space-y-0'>
            <img src={item.src} alt="ads" className='w-48 h-56 object-contain rounded-xl'/>            
            <h1 className='font-bold text-xl'>{item.title}</h1>
            <p className='text-yellow-300'>{item.price} $</p>
            <button onClick={()=>navigate(`${item.price}`)} className='bg-white text-black w-20 md:w-28  duration-200 hover:w-36 md:h-8  ease-in font-semibold '>خرید</button>
          </div>

        </div>)}
     </div>
  )
}
