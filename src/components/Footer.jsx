import React from 'react'

export default function Footer() {
  return (

    <div className='h-60 w-full flex relative'>
      <img src="./images/m4.jpg" alt="m1" className='absolute w-full h-60 -z-10 blur-[3px] brightness-50 object-cover'  />
      <div className='w-screen flex justify-center text-center flex-col items-center space-y-10'>
        <h1 className='text-6xl font-sans font-black'>ارتباط  با ما</h1>
      <div className='flex space-x-3 items-center'>
        <div className='w-64 h-1 bg-white'></div>
        <div className='flex space-x-1'>
          <img src="./images/instagram.png" alt="insta" className='w-8' />
          <img src="./images/whatsapp.png" alt="wp" className='w-8' />
          <img src="./images/telegram.png" alt="tlg" className='w-8' />
        </div>
        <div className='w-64 h-1 bg-white'></div>
      </div>  
    </div>
    </div>
  )
}
