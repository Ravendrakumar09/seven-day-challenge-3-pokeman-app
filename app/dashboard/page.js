import React from 'react'
import Navbar from './components/navbar'
import Mainbar from './components/mainbar' 

export default function page() {
  return (
    <div className='flex flex-col  w-full h-full'>
     <div><Navbar/></div>
     <div><Mainbar/></div>
    </div>
  )
}
