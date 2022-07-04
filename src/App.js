import React, { useContext } from 'react'
import CreateArea from "./components/CreateArea";
import Header from "./components/Header";
import Notes from "./components/Notes";
import Footer from './components/Footer';
import GlobalContext from "./context/GlobalContext";

function App() {

  const { notes, setNotes } = useContext(GlobalContext);

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
      <div className="mt-10 container m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-4">
        {
          notes.map((noteItem, index) => {
            return <Notes key={index} title={noteItem.title} content={noteItem.content} color={noteItem.color} deleteNotes={deleteNotes} id={index} />
          })
        }
      </div>
      <Footer></Footer>
      <br></br>
      <br></br>
    </div>
  );
}

export default App;
