import React, { useContext } from 'react'
import Modal from './Modal'
import GlobalContext from "../context/GlobalContext";
import { types } from "../context/types";

// REACT ICONS
import {BsPin} from 'react-icons/bs'
import {FiUserPlus} from 'react-icons/fi'
import {BiColorFill, BiImage, BiDotsVerticalRounded} from 'react-icons/bi'
import {BsTrash} from 'react-icons/bs'

const Notes = ({title,content,deleteNote,id,color}) => {

  const { showEventModal, dispatch } = useContext(GlobalContext);

  const selectNote = (_id) => {
    dispatch({
      type:types.SELECT_NOTE,
      payload: {
        id: _id,
        showEventModal: true,
      },
    })
  }

  return (
    <>
      <div className={`relative h-96 overflow-hidden border rounded-lg ${color}`}>
        {/* HEADER NOTE */}
        <div className='h-12 w-full flex justify-end '>
          <button 
            className='hover:bg-gray-100 hover:bg-opacity-80 rounded-full transition duration-200 ease-linear mr-2 mt-2 cursor-pointer '
            onClick={()=> selectNote(id)}
          >
            <BsPin className='text-xl w-10'></BsPin>
          </button>
        </div>
        {/* CONTENT NOTE */}
        <div>
          <h2 className='text-lg font-normal text-justify overflow-hidden px-4 truncate '>{title}</h2>
          <p className='h-64 font-light overflow-hidden text-justify z-50 px-4'>{content}</p>
        </div>
        {/* FOOTER NOTE */}
        <div>
          <div className='h-12 px-4 flex justify-between items-center space-x-3'>
            <BsTrash className='text-2xl text-gray-500 transition duration-200 ease-linear hover:text-gray-700' onClick={()=>deleteNote(id)}></BsTrash>
            <FiUserPlus className='text-2xl text-gray-500 transition duration-200 ease-linear hover:text-gray-700'></FiUserPlus>
            <BiColorFill className='text-2xl text-gray-500 transition duration-200 ease-linear hover:text-gray-700'></BiColorFill>
            <BiImage className='text-2xl text-gray-500 transition duration-200 ease-linear hover:text-gray-700'></BiImage>
            <BiDotsVerticalRounded className='text-2xl text-gray-500 transition duration-200 ease-linear hover:text-gray-700'></BiDotsVerticalRounded>
          </div>
        </div>
      </div>
      {showEventModal && <Modal></Modal>}
    </>
  )
}

export default Notes