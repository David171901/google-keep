import React, { useState } from "react";
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
        }}
      >
        {props.children}
      </GlobalContext.Provider>
    );
}