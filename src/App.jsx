import { createContext, useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Piano from "./pages/Piano"
import Violin from "./pages/Violin"
import Guitar from "./pages/Guitar"
import TeacherList from "./pages/TeacherList"

import ViolinDetails from "./pages/ViolinDetails"
import GuitarDetails from "./pages/GuitarDetails"
import PianoDetais from "./pages/PianoDetails"
import PianoDetails from "./pages/PianoDetails"
import Login from "./pages/Login"

export const AppContext = createContext()

function App() {
  const [logInfo,setLogInfo] = useState({
    name:'james',
    age:'',
    password:'',
    email:''
  })
  const myProducts = [
    {
      title:"lava",
      price:499,
      category:'guitar',
      description:'ME 2 Electro Acoustic Guitar Carbon Fibre 36 inch Blue',
      src:'./guitars/gg3.jpg',
      seconds:'../guitars/gg3.jpg',
      star:5
    },
    {
      title:"carry-on",
      price:149,
      category:'guitar',
      description:'By Blackstar Mini Jet Black Electric Guitar Perfect for Kids and Adults, Beginners and Travel, BA226016',
      src:'./guitars/gg4.jpg',
      seconds:'../guitars/gg4.jpg',
      star:1
    },
    {
      title:"yamaha",
      price:129,
      category:'guitar',
      description:'F310 – Full Size Steel String Acoustic Guitar – Traditional Western Body – Tobacco Brown Sunburst',
      src:'./guitars/gg1.jpg',
      seconds:'../guitars/gg1.jpg',
      star:2
    },
    {
      title:"blue lava",
      price:619,
      category:'guitar',
      description:'Acoustic Guitars w/Ideal Bag 36 Midnight Black',
      src:'./guitars/gg2.jpg',
      seconds:'../guitars/gg2.jpg',
      star:3
    },  
    {
      title:"jass",
      price:499,
      category:'piano',
      description:'ME 2 Electro Acoustic Guitar Carbon Fibre 36 inch Blue',
      src:'./pianos/pp1.jpg',
      seconds:'../pianos/pp1.jpg',
      star:5
    },
    {
      title:"moles",
      price:214,
      category:'piano',
      description:'ME 2 Electro Acoustic Guitar Carbon Fibre 36 inch Blue',
      src:'./pianos/pp2.jpg',
      seconds:'../pianos/pp2.jpg',
      star:5
    },
    {
      title:"jass",
      price:412,
      category:'piano',
      description:'ME 2 Electro Acoustic Guitar Carbon Fibre 36 inch Blue',
      src:'./pianos/pp3.jpg',
      seconds:'../pianos/pp3.jpg',
      star:5
    },
    {
      title:"trgw",
      price:532,
      category:'piano',
      description:'ME 2 Electro Acoustic Guitar Carbon Fibre 36 inch Blue',
      src:'./pianos/pp4.jpg',
      seconds:'../pianos/pp4.jpg',
      star:5
    },
    {
      title:"ewqsa",
      price:532,
      category:'violin',
      description:'ME 2 Electro Acoustic Guitar Carbon Fibre 36 inch Blue',
      src:'./violins/vv1.jpg',
      seconds:'../violins/vv1.jpg',
      star:3
    },
    {
      title:"rqwsds",
      price:286,
      category:'violin',
      description:'ME 2 Electro Acoustic Guitar Carbon Fibre 36 inch Blue',
      src:'./violins/vv2.jpg',
      seconds:'../violins/vv2.jpg',
      star:1
    },
    {
      title:"gyrt",
      price:865,
      category:'violin',
      description:'ME 2 Electro Acoustic Guitar Carbon Fibre 36 inch Blue',
      src:'./violins/vv3.jpg',
      seconds:'../violins/vv3.jpg',
      star:2
    },
    {
      title:"fdgy",
      price:643,
      category:'violin',
      description:'ME 2 Electro Acoustic Guitar Carbon Fibre 36 inch Blue',
      src:'./violins/vv4.jpg',
      seconds:'../violins/vv4.jpg',
      star:4
    }
  ]
  const teachers = [
    {
      name:'alexa jones',
      age:21,
      src:'./teachers/w1.jpg',
      category:'piano'
    },
    {
      name:'jmaes blake',
      age:19,
      src:'./teachers/w2.jpg',
      category:'piano'
    },
    {
      name:'sam kior',
      age:32,
      src:'./teachers/w3.jpg',
      category:'guitar'
    },
    {
      name:'will peow',
      age:23,
      src:'./teachers/w4.jpg',
      category:'guitar'
    },
    {
      name:'chris white',
      age:30,
      src:'./teachers/w5.jpg',
      category:'violin'
    },
    {
      name:'lily aesrt',
      age:20,
      src:'./teachers/w11.jpg',
      category:'violin'
    }
  ]
  

  return (
    <AppContext.Provider value={{myProducts,teachers,logInfo,setLogInfo}}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="piano" element={<Piano/>}/>
        <Route path="piano/:price" element={<PianoDetails/>}/>
        <Route path="guitar" element={<Guitar/>}/>
        <Route path="guitar/:price" element={<GuitarDetails/>}/>
        <Route path="violin" element={<Violin/>}/>
        <Route path="violin/:price" element={<ViolinDetails/>}/>
        <Route path="teacher-list" element={<TeacherList/>}>
        </Route>
        <Route path="login" element={<Login/>}/>
      </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App
