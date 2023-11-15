import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Signup() {
  const navigate = useNavigate()
  return (
    <div className='w-full items-center flex justify-center mt-2 lg:justify-start px-20 rounded-md'>

    <div className='w-[500px]  md:w-[700px] md:h-96 h-80  bg-stone-700 shadow-lg rounded-md border-none relative flex flex-col text-center'>
        <img src="./images/m3.jpg" alt="sign" className=' object-cover absolute blur-[0.5px] border-none  w-[500px] h-80  md:w-[800px] md:h-96' />
        <h1 className='z-10 font-serif font-extrabold  text-4xl md:text-7xl text-stone-200 mt-16'>آکـــادمی ملودیــک</h1>
        <div className='w-full flex justify-center'>

        <p className='z-10 font-mono text-lg opacity-80 w-64 my-5'>ثبت نام دوره تابستانه آکـــادمی ملودیــک </p>
        </div>
        <div className='w-full flex justify-center mt-8 '>
        <button onClick={()=>navigate('teacher-list')} className='w-32 font-sans text-lg h-10 text-black bg-white z-10 hover:bg-black duration-200 hover:text-white ease-linear font-bold hover:w-44 rounded-lg'>ثبت نام</button>
        </div>
    </div>
    </div>
  )
}
