import React from 'react'
import {AiOutlineClose} from 'react-icons/ai'

const Modal = ({show,setShow}) => {
  
  return (
    <>
    {show && (
      <div className='flex justify-center items-center w-screen h-screen fixed top-0 left-0 bg-gray-300 bg-opacity-50'>
        <div className='relative max-w-sm w-full h-1/2 bg-white rounded-lg  p-8 opacity-100'>
          Contenido
          <div className='absolute top-0 right-0' onClick={()=>{
            setShow(false)
            console.log('first')
          }}>
            <AiOutlineClose></AiOutlineClose>
          </div>
        </div>
      </div>
    )}
    </>
  )
}

export default Modal