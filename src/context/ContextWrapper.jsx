import React, { useEffect, useState, useReducer } from "react";
import GlobalContext from "./GlobalContext";
import { UserReducer,initialNotesState } from "./Reducer";

export default function ContextWrapper(props) {

    // USE REDUCER
    const [state, dispatch] = useReducer(UserReducer, initialNotesState)

    const [note, setNote] = useState({
        title: "",
        content: "",
        color: "",
    });
    
    const [noteEdit, setNoteEdit] = useState({});

    useEffect(() => {
      if(state.current_note !== null){
        setNoteEdit(state.notes[state.current_note]);
      }
    }, [state.current_note, state.notes]);

    return (
      <GlobalContext.Provider
        value={{
            notes: state.notes,
            selectNote: state.current_note,
            showEventModal: state.status_modal,
            note,
            setNote,
            noteEdit,
            setNoteEdit,
            dispatch,
        }}
      >
        {props.children}
      </GlobalContext.Provider>
    );
}