import React from "react";

const GlobalContext = React.createContext({
    noteEdit: null,
    setNoteEdit: () => {},
});

export default GlobalContext;