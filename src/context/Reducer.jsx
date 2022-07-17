import { types } from "./types";

const initialNotesState = {
  notes: [],
}

const UserReducer = (state, action) => {
  switch (action.type) {
    case types.ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes,action.payload]
      };
    case types.DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter((note,index) => index !== action.payload)
      };  
    default:
      return state;
  }
};

export { UserReducer,initialNotesState };
