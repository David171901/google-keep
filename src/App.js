import React, { useContext } from 'react'
import CreateArea from "./components/CreateArea";
import Header from "./components/Header";
import Notes from "./components/Notes";
import GlobalContext from "./context/GlobalContext";
import { types } from "./context/types";

function App() {

  const { notes, search, dispatch } = useContext(GlobalContext);

  const addNote = (newNote) => {
    dispatch({
      type:types.ADD_NOTE,
      payload: {
        notes: newNote,
        note: {
          title: "",
          content: "",
        },
      },
    })
  }

  const deleteNote = (id) => {
    dispatch({
      type:types.DELETE_NOTE,
      payload: id,
    })
  }

  return (
    <div>
      <Header></Header>
      <CreateArea addNote={addNote}/>
      <div className="mt-10 container m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-4">
        {
          notes.filter(note => note.title.toLowerCase().includes(search.toLowerCase())).map((noteItem, index) => {
            return <Notes key={index} title={noteItem.title} content={noteItem.content} color={noteItem.color} deleteNote={deleteNote} id={index} />
          })
        }
      </div>
      <br></br>
      <br></br>
    </div>
  );
}

export default App;
