import React, { useEffect, useState } from "react";
import GlobalContext from "./GlobalContext";

export default function ContextWrapper(props) {

    const [notes, setNotes] = useState([]);

    const [note, setNote] = useState({
        title: "",
        content: "",
        color: "",
    });

    const [selectNote, setSelectNote] = useState(null);

    const [showEventModal, setShowEventModal] = useState(false);
    
    const [noteEdit, setNoteEdit] = useState({});

    useEffect(() => {
      if(selectNote !== null){
        setNoteEdit(notes[selectNote]);
      }
    }, [selectNote, notes]);

    return (
      <GlobalContext.Provider
        value={{
            notes,
            setNotes,
            note,
            setNote,
            selectNote,
            setSelectNote,
            showEventModal,
            setShowEventModal,
            noteEdit,
            setNoteEdit,
        }}
      >
        {props.children}
      </GlobalContext.Provider>
    );
}