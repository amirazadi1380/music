import { faBars, faClose, faContactCard, faHome, faJoint, faLitecoinSign, faPhoneFlip, faSign, faSignIn, faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
    const [showNav,setShowNav] = useState(false)
    const navigate = useNavigate()
  return (
    <div >
        <nav className='flex justify-between relative items-center p-4 z-20'>
            <h1 className='font-mono text-white text-5xl font-extrabold -rotate-6 hover:rotate-6 cursor-pointer duration-200 ease-linear md:mt-5'>MELODIC🎸</h1>
            {showNav ? <FontAwesomeIcon  onClick={()=>setShowNav(!showNav)} className='absolute text-white  z-50  duration-200  ease-in md:hidden text-5xl right-5 cursor-pointer top-4' icon={faClose}/> : <FontAwesomeIcon onClick={()=>setShowNav(!showNav)} className='absolute z-50  text-white duration-200 ease-in md:hidden text-5xl right-3 cursor-pointer top-4' icon={faBars}/>}
            <ul className={`text-black md:text-white  ${showNav ? 'flex flex-col w-80 duration-200 ease-linear text-white' : 'opacity-0 w-0'}  bg-black/90  md:flex md:flex-row md:h-20 md:items-center  md:pt-0 md:pb-16 rounded-md h-screen md:w-[400px] md:justify-between absolute  right-0 top-2 flex flex-col items-center pt-20 space-y-20 text-5xl md:mr-16 md:bg-transparent md:opacity-100`}>
              <li className='hover:scale-110 duration-100 ease-linear hover:border-b-4 border-black cursor-pointer pt-20 '>
                <FontAwesomeIcon icon={faHome}/>
              </li>
              <li className='hover:scale-110 duration-100 ease-linear hover:border-b-4 border-black cursor-pointer'>
                <FontAwesomeIcon icon={faPhoneFlip}/>
              </li>
              <li className='hover:scale-110 duration-100 ease-linear hover:border-b-4 border-black cursor-pointer'>
                <FontAwesomeIcon onClick={()=>navigate('login')} icon={faSignInAlt} />
              </li>
            </ul>
        </nav>
        
    </div>
  )
}
