import React, { useState } from 'react'
import CreateArea from "./components/CreateArea";
import Header from "./components/Header";
import Notes from "./components/Notes";
import Modal from "./components/Modal";

function App() {

  const [show, setShow] = useState(false);

  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes((prevValue) => {
      return [...prevValue, newNote];
    });
  }

  const deleteNotes = (id) => {
    setNotes((preValue) => {
      return [...preValue.filter((note,index) => index !== id)];
    });
  }


  return (
    <div>
      <Header></Header>
      <CreateArea addNote={addNote}/>
      <div className="mt-10 container m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-4">
        {
          notes.map((noteItem, index) => {
            return <Notes key={index} title={noteItem.title} content={noteItem.content} color={noteItem.color} deleteNotes={deleteNotes} id={index} setShow={setShow}/>
          })
        }
      </div>
      <Modal
        show={show}
        setShow={setShow}
      ></Modal>
    </div>
  );
}

export default App;
