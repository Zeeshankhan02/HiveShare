import React from 'react'

function Card({src,title,desc,href,className}) {
  return (
    <>
    <div className= {` ${className} gap-2 border-1 border-gray-300 bg-gray-50 rounded-2xl flex flex-col p-6 items-center text-center hover:scale-105 hover:shadow-lg transition-all duration-600 ease-in-out`} >
      <div className=''>
      {src}
      {href?<img className='w-12 h-12 rounded-2xl mb-2' src={href}></img>:null}
      </div>
      <h3 className='text-xl font-semibold'>{title}</h3>
      <p className='text-sm'>{desc}</p>
    </div>
    </>
  )
}

export default Card