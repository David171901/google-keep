import React, { useContext } from 'react'
import GlobalContext from "../context/GlobalContext";
import { randomColorTailwind } from "../utils";
import { types } from "../context/types";

// IMPORT ICONS
import { IoIosAdd } from "react-icons/io";

const CreateArea = ({addNote}) => {
    
    const { note, dispatch } = useContext(GlobalContext);

    const handleChange = (e) =>{
        const { name, value } = e.target;
        dispatch({
          type:types.ON_CHANGE_NOTE,
          payload: {
            ...note,
            [name]: value,
          },
        })
    }

    const submitButton = (event) => {
        addNote({
          ...note,
          color: randomColorTailwind(),
        });
        event.preventDefault();
    }
  return (
    <div className='flex flex-col items-center mt-10'>
      <form 
        className='relative border-2 rounded-lg max-w-2xl w-full p-2' 
        onSubmit={submitButton}
      >
        <input
            className='w-full focus:outline-none py-2 px-6'
            value={note.title}
            type="text"
            placeholder="Title"
            name="title"
            onChange={handleChange}
            required
        />
        <textarea
            className='w-full h-32 max-h-60 focus:outline-none scrollbar-thumb-gray-300 scrollbar-track-gray-100 scrollbar-thin text-justify resize-none px-6'
            value={note.content}
            name="content"
            placeholder="Take a note..."
            onChange={handleChange}
            required
        />
        <button 
          className='absolute -right-3 -bottom-2 rounded-full bg-yellow-400 hover:bg-yellow-300 transition duration-200 ease-linear'>
          <IoIosAdd 
            className='text-3xl text-white'
          />
        </button>
      </form>
    </div>
  )
}

export default CreateArea