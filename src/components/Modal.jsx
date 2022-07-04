import React, { useContext, useState } from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import GlobalContext from "../context/GlobalContext";

import {AiOutlineBell} from 'react-icons/ai'
import {FiUserPlus} from 'react-icons/fi'
import {BiColorFill, BiImage, BiDotsVerticalRounded} from 'react-icons/bi'

const Modal = () => {
  
  const { notes,setNotes,selectNote,setShowEventModal } = useContext(GlobalContext);

  const [noteEdit, setNoteEdit] = useState(notes[selectNote]);

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
                className={`px-8 py-4 w-full focus:outline-none ${notes[selectNote].color}`}
                value={noteEdit.title}
                type="text"
                placeholder="Title"
                name="title"
                onChange={handleChange}
                required
            />
            <p className='px-8 py-4 w-full h-[30rem]'>
              <textarea
                  className={`w-full h-64 focus:outline-none scrollbar scrollbar-thumb-gray-300 scrollbar-track-gray-100 text-justify ${notes[selectNote].color}`}
                  value={noteEdit.content}
                  name="content"
                  placeholder="Take a note..."
                  onChange={handleChange}
                  required
              ></textarea>
            </p>
            <div className='mt-10 h-12 w-full border-t shadow flex justify-between items-center space-x-4 '>
              <div className='flex'>
                <AiOutlineBell className='text-2xl'></AiOutlineBell>
                <FiUserPlus className='text-2xl'></FiUserPlus>
                <BiColorFill className='text-2xl'></BiColorFill>
                <BiImage className='text-2xl'></BiImage>
                <BiDotsVerticalRounded className='text-2xl'></BiDotsVerticalRounded>
              </div>
              <button>Save</button>
            </div>
          </form>

          <div className='absolute top-0 right-0' onClick={()=>{
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