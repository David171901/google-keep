import React from 'react'
import {AiOutlineDelete} from 'react-icons/ai'

const Notes = ({title,content,deleteNotes,id,color}) => {



  return (
    <div className={'cursor-pointer relative border rounded-lg p-4 '+color}>
        <h2 className='text-lg font-normal text-justify'>{title}</h2>
        <p className='font-light overflow-hidden text-justify z-50'>{content}</p>
        <button className='absolute right-2 bottom-2 rounded-full p-2 hover:bg-gray-400  hover:bg-opacity-50' onClick={()=>deleteNotes(id)}>
            <AiOutlineDelete className='text-2xl'/>
        </button>
    </div>
  )
}

export default Notes