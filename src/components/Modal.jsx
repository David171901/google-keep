import React, { useContext } from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import GlobalContext from "../context/GlobalContext";

import {AiOutlineBell} from 'react-icons/ai'
import {FiUserPlus} from 'react-icons/fi'
import {BiColorFill, BiImage, BiDotsVerticalRounded} from 'react-icons/bi'
import {BsFileArrowDown} from 'react-icons/bs'

const Modal = () => {
  
  const { notes,setNotes,selectNote,setShowEventModal, noteEdit, setNoteEdit } = useContext(GlobalContext);

  const handleChange = (e) =>{
    const { name, value } = e.target;
    setNoteEdit((preValue) => {
        return {
            ...preValue,
            [name]: value,
        };
    });
  }

  const onSubmitUpdate = (event) => {
    let newNotes = [...notes];
    newNotes[selectNote] = noteEdit;
    setNotes(newNotes);
    setShowEventModal(false);
    event.preventDefault();
  }

  return (
    <>
      <div className='flex justify-center items-center w-screen h-screen fixed top-0 left-0 bg-gray-300 bg-opacity-20'>
        <div className={`relative max-w-lg w-full h-auto rounded-lg opacity-100 ${notes[selectNote].color} scrollbar scrollbar-thumb-gray-300 scrollbar-track-gray-100`}>
          <form onSubmit={()=>onSubmitUpdate()}>
            <input
                className={`px-8 py-4 w-full focus:outline-none text-lg font-semibold border-b ${notes[selectNote].color}`}
                value={noteEdit?.title}
                type="text"
                placeholder="Title"
                name="title"
                onChange={handleChange}
                required
            />
            <textarea
                className={`px-8 py-4 w-full h-[31rem] focus:outline-none scrollbar-thumb-gray-300 scrollbar-track-gray-100 scrollbar-thin text-justify ${notes[selectNote].color}`}
                value={noteEdit?.content}
                name="content"
                placeholder="Take a note..."
                onChange={handleChange}
                required
            />
            <div className='h-12 w-full border-t shadow flex justify-evenly items-center space-x-4 '>
                <AiOutlineBell className='text-2xl text-gray-500 transition duration-200 ease-linear hover:text-gray-700'></AiOutlineBell>
                <FiUserPlus className='text-2xl text-gray-500 transition duration-200 ease-linear hover:text-gray-700'></FiUserPlus>
                <BiColorFill className='text-2xl text-gray-500 transition duration-200 ease-linear hover:text-gray-700'></BiColorFill>
                <BiImage className='text-2xl text-gray-500 transition duration-200 ease-linear hover:text-gray-700'></BiImage>
                <BsFileArrowDown className='text-2xl text-gray-500 transition duration-200 ease-linear hover:text-gray-700'></BsFileArrowDown>
                <BiDotsVerticalRounded className='text-2xl text-gray-500 transition duration-200 ease-linear hover:text-gray-700'></BiDotsVerticalRounded>
                <button className='px-4 py-1 text-lg font-semibold rounded-lg transition duration-200 ease-linear hover:bg-gray-200 hover:bg-opacity-50'>Save</button>
            </div>
          </form>

          <div className='absolute top-2 right-2 text-xl' onClick={()=>{
            setShowEventModal(false);
          }}>
            <AiOutlineClose></AiOutlineClose>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal