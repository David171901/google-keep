import React from 'react'

const Footer = () => {
    const tailwinds = <img src='https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' alt='Tailwind CSS Logo' className='w-12 h-12'></img>
    const reactjs = <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png' alt='React Logo' className='w-12 h-12'></img>

  return (
    <div className='flex justify-center items-center absolute bottom-4 right-4 space-x-2'>
        <div className='flex flex-col justify-center items-center'>
            <p className='text-xl font-serif'>Tailwinds</p>
            {tailwinds}
        </div>
        <span className='text-6xl font-serif'>+</span>
        <div className='flex flex-col justify-center items-center'>
            <p className='text-xl font-serif'>React</p>
            {reactjs}
        </div>
    </div>
  )
}

export default Footer