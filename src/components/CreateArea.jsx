import React, { useContext } from 'react'
import { IoIosAdd } from "react-icons/io";
import GlobalContext from "../context/GlobalContext";

const CreateArea = ({addNote}) => {

    const { note, setNote } = useContext(GlobalContext);

    const handleChange = (e) =>{
        const { name, value } = e.target;
        setNote((preValue) => {
            return {
                ...preValue,
                [name]: value,
            };
        });
    }

    const submitButton = (event) => {
        addNote({
          ...note,
          color: randomColorTailwind(),
        });
        event.preventDefault();
        setNote({
            title: "",
            content: "",
        })
    }

    const randomColorTailwind = () => {
      const colors = ['bg-red-300', 'bg-orange-300', 'bg-yellow-300', 'bg-green-300', 'bg-blue-300', 'bg-indigo-300', 'bg-purple-300'];
      return colors[Math.floor(Math.random() * colors.length)];
    }

  return (
    <div className='flex flex-col items-center mt-10'>
      <form className='relative border-2 rounded-lg max-w-2xl w-full' onSubmit={submitButton}>
        <input
            className='px-4 py-2 w-full focus:outline-none'
            value={note.title}
            type="text"
            placeholder="Title"
            name="title"
            onChange={handleChange}
            required
        />
        <p className='px-4 py-2 '>
            <textarea
                className='w-full h-32 max-h-60 focus:outline-none scrollbar scrollbar-thumb-gray-300 scrollbar-track-gray-100 text-justify'
                value={note.content}
                name="content"
                placeholder="Take a note..."
                onChange={handleChange}
                required
            ></textarea>
        </p>
        <button className='absolute -right-3 -bottom-2 rounded-full bg-yellow-400'>
          <IoIosAdd className='text-3xl text-white'/>
        </button>
      </form>
    </div>
  )
}

export default CreateArea