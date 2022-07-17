import React, { useEffect, useState, useReducer } from "react";
import GlobalContext from "./GlobalContext";
import { UserReducer,initialNotesState } from "./Reducer";

export default function ContextWrapper(props) {

    // USE REDUCER
    const [state, dispatch] = useReducer(UserReducer, initialNotesState)

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
            notes: state.notes,
            setNotes,
            note,
            setNote,
            selectNote,
            setSelectNote,
            showEventModal,
            setShowEventModal,
            noteEdit,
            setNoteEdit,
            dispatch,
        }}
      >
        {props.children}
      </GlobalContext.Provider>
    );
}