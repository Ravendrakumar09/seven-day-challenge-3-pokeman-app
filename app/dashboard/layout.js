import React from 'react'

export default function layout({children}) {
  return (
    <div className='m-4 rounded-xl  bg-custom-blue text-gray-200'>
      {children}
    </div>
  )
}
