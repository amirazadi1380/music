import { faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { AppContext } from '../App'

export default function TeacherList() {
  const {teachers} = useContext(AppContext)
  const [showTeachers,setShowTeachers] = useState(false)
  const [category,setCategory] = useState()
  return (
    <div className='w-screen flex flex-col h-screen justify-center items-center'>

        <div className='backt absolute z-0'>
        </div>
        <div className='z-10 w-screen h-screen flex flex-col justify-center items-center space-y-10'>
          <div className='w-[1000px] flex flex-col items-center space-y-2'>
            <img src='sound.png' alt='sound' className='w-40 h-20 object-cover '/>
            <h1 className='font-serif text-2xl md:text-4xl lg:text-5xl text-yellow-400 font-black'>لــــــــــــــــــیســـــــــــــــــت اساتـــــــــــــــــــــد</h1>
              <div className='bg-pink-500 w-80 h-[2px]'></div>
          </div>
          <div className='flex w-[350px] md:w-[1000px] justify-between text-center'>
            <div className='w-40 bg-yellow-300/90 h-16 rounded-md mr-5 text-black font-black text-center flex justify-center cursor-pointer items-center text-4xl hover:bg-white/40 hover:text-white duration-200 ease-linear' onClick={()=>{
              setShowTeachers(true)
              setCategory('piano')
            }}>پیانو</div>
            <div className='w-40 bg-yellow-300/90 h-16 rounded-md mr-5 text-black font-black text-center flex justify-center items-center text-4xl hover:bg-white/40 hover:text-white duration-200 ease-linear cursor-pointer' onClick={()=>{
              setShowTeachers(true)
              setCategory('guitar')
            }}>گیتار</div>
            <div className='w-40 bg-yellow-300/90 h-16 rounded-md text-black font-black text-center flex justify-center items-center text-4xl hover:bg-white/40 hover:text-white duration-200 ease-linear cursor-pointer' onClick={()=>{
              setShowTeachers(true)
              setCategory('violin')
            }}>ویالون</div>
          </div>
{    showTeachers &&  <div className='w-[600px] flex justify-center items-center h-[400px] rounded-lg -z-10 bg-black/60 mt-10 lg:w-[1200px] lg:h-[600px]'>
                {teachers.filter(item=>item.category == category).map(item=><div className='w-40 h-52 md:w-64 md:h-72 rounded-md relative' key={Math.random()*1000}>
                  <img src={item.src} alt='teacher' className='w-40 h-52 md:w-52 opacity-70  md:h-72 rounded-md absolute -z-10' />
                  <div className='w-40 h-52  md:w-52 text-center md:h-72 rounded-md z-50 flex justify-center items-center'>
                    <h1 className='font-balck text-5xl'>{item.name}</h1>
                  </div>
                  <div className='flex justify-center w-40 md:w-52'>

                  <button className=' hover:w-36  font-semibold bg-white text-black w-24 h-10 hover:bg-slate-900 hover:rounded-lg hover:text-white duration-200 ease-in-out mt-2'>ثبت نام</button>
                  </div>
                </div>)}
          </div>}
          </div>  
         <Outlet/>
    </div>
  )
}
