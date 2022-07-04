import React, { useContext } from 'react'
import {AiOutlineDelete} from 'react-icons/ai'
import Modal from './Modal'
import GlobalContext from "../context/GlobalContext";

const Notes = ({title,content,deleteNotes,id,color}) => {

  const { setSelectNote, showEventModal, setShowEventModal } = useContext(GlobalContext);

  return (
    <>

      <div className={`cursor-pointer relative h-96 overflow-hidden border rounded-lg p-4 ${color}`} onClick={()=> {
        setSelectNote(id);
        setShowEventModal(true);
      }}>
          <h2 className='text-lg font-normal text-justify'>{title}</h2>
          <p className='font-light overflow-hidden text-justify z-50'>{content}</p>
          <button className='absolute right-2 bottom-2 rounded-full p-2 hover:bg-gray-400  hover:bg-opacity-50' onClick={()=>deleteNotes(id)}>
              <AiOutlineDelete className='text-2xl'/>
          </button>
      </div>

      {showEventModal && <Modal></Modal>}
    </>


  )
}

export default Notes