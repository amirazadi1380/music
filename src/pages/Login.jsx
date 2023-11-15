import { faArrowLeft, faComment, faMailBulk, faMailForward, faMailReply, faMailReplyAll, faQ, faQuestion, faRepeat, faRocket, faShare, faTeletype, faUser, faVoicemail } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useState } from 'react'
import { AppContext } from '../App'
import Modal from '../components/Modal'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const [showLog,setShowLog] = useState(false)
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const  [pass,setPass] = useState()
    const [pass2,setPass2] = useState()
    const [showModal,setShowModal] = useState(false)
    const {logInfo,setLogInfo} = useContext(AppContext)
    const navigate = useNavigate()
  return (
    <div className='w-screen h-screen flex items-center justify-center bg-white/10 relative'>
        <div className='w-[500px] flex flex-col justify-center items-center h-[700px] '>
            <FontAwesomeIcon onClick={()=>navigate('/')} icon={faArrowLeft} className='absolute left-4 top-5 text-3xl cursor-pointer hover:scale-125 duration-150 ease-linear hover:text-black'/>
     
        <div className='w-64  h-28 flex justify-between'>
            <div className='space-y-2 text-center'>
            <h1 onClick={()=>setShowLog(true)} className='font-black text-3xl cursor-pointer'>ورود</h1>
                {showLog && <div className='bg-yellow-300 w-28 h-[3px] '></div>}
            </div>
            <div className='space-y-2 text-center'>
            <h1 onClick={()=>setShowLog(false)}  className='font-black text-3xl cursor-pointer'>ثبت نام</h1>
               { !showLog && <div className='bg-yellow-300 w-28 h-[3px] shadow-white shadow-xl '></div>}
            </div>
        </div>

       <Modal showModal={showModal} setShowModal={setShowModal}>
        <p className='font-black text-2xl '>{logInfo.name}سلام </p>  
        <p className='font-black text-1xl'>با ایمیل : {logInfo.email}</p>          
        </Modal>

    {showLog ?    <form onClick={(e)=>{
        e.preventDefault()
        
        
    }} className='w-[500px] h-96 flex flex-col justify-center items-center  space-y-10'>
            <label className=' bg-sky-800  bg-opacity-50 rounded-full flex items-center  w-[380px] md:w-[420px]  h-16 justify-between'>
                <div className='bg-black/60 w-[70px] h-16 rounded-full flex justify-center items-center'>
                    <FontAwesomeIcon icon={faUser} className='text-4xl' />
                </div>
                <input type="text" className='w-[350px] text-right px-5 h-12 bg-gray-500 bg-opacity-10 outline-none rounded-full ' placeholder='نام کاربری' />
            </label>
            <label className=' bg-sky-800 bg-opacity-50 rounded-full flex items-center w-[380px] md:w-[420px] h-16 justify-between'>
                <input type="password" className='w-[350px] text-left px-5 h-12 bg-gray-500 bg-opacity-10 outline-none rounded-full ' placeholder='رمز عبور' />
                <div className='bg-black/60 w-[70px] h-16 rounded-full flex justify-center items-center'>
                    <FontAwesomeIcon icon={faQuestion} className='text-4xl' />
                </div>
            </label>
            <div className='w-full flex justify-end text-right px-16'>
                    <p className='text-blue-400 cursor-pointer'>رمز عبور را فراموش کرده ام</p>
            </div>
            <button className=' bg-sky-800 w-[350px] hover:scale-110 font-black text-3xl h-16 rounded-full hover:bg-sky-900 duration-100 ease-linear'>
                ورود
            </button>
        
        </form> :


        <form  className='w-[500px] h-[480px] flex flex-col justify-center items-center  space-y-10'>
            <label className=' bg-sky-800  bg-opacity-50 rounded-full flex items-center  w-[380px] md:w-[420px]  h-16 justify-between'>
                <div className='bg-black/60 w-[70px] h-16 rounded-full flex justify-center items-center'>
                    <FontAwesomeIcon icon={faUser} className='text-4xl' />
                </div>
                <input onChange={(e)=>setName(e.target.value)} value={name} type="text" className='w-[350px] text-right px-5 h-12 bg-gray-500 bg-opacity-10 outline-none rounded-full ' placeholder='نام کاربری' />
            </label>
            <label className=' bg-sky-800 bg-opacity-50 rounded-full flex items-center w-[380px] md:w-[420px]  h-16 justify-between'>
                <input onChange={(e)=>setPass(e.target.value)} value={pass} type="password" className='w-[350px] text-left px-5 h-12 bg-gray-500 bg-opacity-10 outline-none rounded-full ' placeholder='رمز عبور' />
                <div className='bg-black/60 w-[70px] h-16 rounded-full flex justify-center items-center'>
                    <FontAwesomeIcon icon={faQuestion} className='text-4xl' />
                </div>
            </label>
            <label className=' bg-sky-800  bg-opacity-50 rounded-full flex flex-col items-center w-[380px] md:w-[420px]  h-16 justify-between'>
                <div className='flex items-center'>
                    
                <div className='bg-black/60 w-[70px] h-16 rounded-full flex justify-center items-center'>
                    <FontAwesomeIcon icon={faRepeat} className='text-4xl' />
                </div>
                <input onChange={(e)=>setPass2(e.target.value)} value={pass2}  type="password" className='w-[300px] md:w-[350px] text-right px-5 h-12 bg-gray-500 bg-opacity-10 outline-none rounded-full ' placeholder='تکرار رمز عبور' />
                </div>
                {pass == pass2 ? <p className='text-green-400'>درست</p> : <p className='text-sm mt-2 text-red-700'>رمز عبور مطابقت ندارد</p>}
                

            </label>
            <label className=' bg-sky-800 bg-opacity-50 rounded-full flex items-center  w-[380px] md:w-[420px]  h-16 justify-between'>
                <input onChange={(e=>setEmail(e.target.value))} value={email} type="email" className='w-[350px] text-right px-5 h-12 bg-gray-500 bg-opacity-10 outline-none rounded-full ' placeholder='ایمیل' />
                <div className='bg-black/60 w-[70px] h-16 rounded-full flex justify-center items-center'>
                    <FontAwesomeIcon icon={faComment} className='text-4xl' />
                </div>
            </label>

            <button onClick={(e)=>{
            e.preventDefault()
            setShowModal(true)
            setEmail('')
            setName('')
            setPass('')
            setPass2('')
            setLogInfo({
                name:name,
                email:email,
                password:pass
            })
            
        }} className=' bg-sky-800 w-[350px] hover:scale-110 font-black text-3xl h-16 rounded-full hover:bg-sky-900 duration-100 ease-linear'>
                ثبت نام
            </button>
        
        </form>}
    </div>
        </div>
  )
}
