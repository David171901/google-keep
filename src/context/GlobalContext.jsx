import React from "react";

const GlobalContext = React.createContext({
    notes: null,
    setNotes: () => {},
    note: null,
    setNote: () => {},
    selectNote: null,
    setSelectNote: () => {},
    showEventModal: false,
    setShowEventModal: () => {},
});

export default GlobalContext;