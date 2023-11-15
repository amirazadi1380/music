import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Modal({children,showModal,setShowModal}) {
  return (
    <div className={`absolute top-1/4 md:top1/2 bg-gradient-to-r from-blue-950 to-purple-950 space-y-5 justify-center items-center flex flex-col  h-[370px] rounded-xl shadow-2xl  bg-white duration-150 ${showModal ? 'w-80 opacity-100 text-black' : ' w-0 opacity-0'}`}>
        <FontAwesomeIcon onClick={()=>setShowModal(false)} icon={faClose} className='text-5xl text-black p-2 absolute right-0 top-2 cursor-pointer hover:text-white'/>
        {children}
        </div>
  )
}
