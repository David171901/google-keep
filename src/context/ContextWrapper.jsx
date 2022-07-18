import React, { useEffect, useReducer } from "react";
import GlobalContext from "./GlobalContext";
import { UserReducer,initialNotesState } from "./Reducer";
import { types } from "./types";

export default function ContextWrapper(props) {

    // USE REDUCER
    const [state, dispatch] = useReducer(UserReducer, initialNotesState)

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
            dispatch,
        }}
      >
        {props.children}
      </GlobalContext.Provider>
    );
}