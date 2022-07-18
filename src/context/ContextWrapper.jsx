import React, { useEffect, useReducer } from "react";
import GlobalContext from "./GlobalContext";
import { UserReducer,initialNotesState } from "./Reducer";
import { types } from "./types";

function initEvents() {
  const storageEvents = localStorage.getItem("savedEvents");
  const parsedEvents = storageEvents ? JSON.parse(storageEvents) : {};
  return parsedEvents;
}

export default function ContextWrapper(props) {

    // USE REDUCER
    const [state, dispatch] = useReducer(UserReducer, initialNotesState, initEvents)

    useEffect(() => {
      localStorage.setItem("savedEvents", JSON.stringify(state));
    }, [state]);

    useEffect(() => {
      if(state.current_note !== null){
        dispatch({
          type:types.ON_CHANGE_EDIT,
          payload: state.notes[state.current_note],
        })
      }
    }, [state.current_note, state.notes]);

    return (
      <GlobalContext.Provider
        value={{
            notes: state.notes,
            selectNote: state.current_note,
            showEventModal: state.status_modal,
            note: state.note,
            noteEdit: state.note_edit,
            search: state.search,
            dispatch,
        }}
      >
        {props.children}
      </GlobalContext.Provider>
    );
}