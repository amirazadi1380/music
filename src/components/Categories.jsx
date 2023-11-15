import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Categories() {
    const navigate  = useNavigate()
  return (
    <div className='w-screen  flex justify-center items-center py-10 text-center flex-col'>
     <h1 className='text-6xl font-black opacity-80'>سازهای تدریسی</h1>
     <div className='w-64 bg-white h-1 shadow-2xl shadow-black mt-5'></div>
    <div className='w-[800px]  h-[1000px]  lg:h-[700px] lg:w-[2000px] py-10 grid grid-cols-1 md:grid-cols-1 place-items-center xl:grid-cols-3  relative'>
        
        <div onClick={()=>navigate('piano')} className='hover:scale-110 cursor-pointer hover:opacity-70  duration-300 ease-in flex flex-col justify-center items-center w-[500px]'>
            <img src="./images/p1.jpg" alt="p1" className='xl:w-[420px] xl:h-[500px]  h-72 w-60  shadow-xl shadow-slate-800 absolute z-50 rounded-2xl' />
                <div className='w-60  h-72 flex justify-center items-center z-50 opacity-0 hover:opacity-100 duration-200 ease-linear md:w-[300px] md:h-[500px]  xl:w-[500px] xl:h-[700px]'>
            <h1 className='text-7xl font-black w-32'>پیانو</h1>
                </div>
        </div>
        <div onClick={()=>navigate('guitar')} className='hover:scale-110 md:mb-16  xl:mb-0 cursor-pointer hover:opacity-70  duration-300 ease-in flex flex-col justify-center items-center'>
            <img src="./images/g5.jpg" alt="p1" className=' xl:w-[420px] xl:h-[500px]  h-72 w-60 rounded-2xl shadow-xl shadow-slate-800 absolute z-50' />
                <div className='w-60  h-72 flex justify-center items-center z-50 opacity-0 hover:opacity-100 duration-200 ease-linear xl:w-[500px] xl:h-[700px]'>
            <h1 className='text-7xl font-black w-32'>گیتار</h1>
                </div>
        </div>
        <div onClick={()=>navigate('violin')} className='hover:scale-110 md:mt-10 xl:mt-0 cursor-pointer hover:opacity-70 duration-300 ease-in flex flex-col justify-center items-center'>
            <img src="./images/f2.jpg" alt="p1" className='xl:w-[420px] xl:h-[500px]  h-72 w-60 rounded-2xl shadow-xl shadow-slate-800 absolute z-50' />
                <div className='w-60 xl:w-[500px] xl:h-[700px]  h-72 flex justify-center items-center z-50 opacity-0 hover:opacity-100 duration-200 ease-linear'>
            <h1 className='text-7xl font-black w-32'>ویالن</h1>
                </div>
        </div>
    </div>
    </div>
  )
}
