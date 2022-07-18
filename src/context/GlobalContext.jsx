import React from "react";

const GlobalContext = React.createContext({
    note: null,
    setNote: () => {},
    noteEdit: null,
    setNoteEdit: () => {},
});

export default GlobalContext;