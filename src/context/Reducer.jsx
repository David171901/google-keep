import { types } from "./types";

const initialNotesState = {
  notes: [],
  current_note: null,
  status_modal: false,
}

const UserReducer = (state, action) => {
  switch (action.type) {
    // NOTES
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
    case types.EDIT_NOTE:
      return {
        ...state,
        notes: state.notes.map((note,index)=>action.payload.selectNote === index ? action.payload.noteEdit : note),
        status_modal: action.payload.showEventModal,
      };
    // NOTE 
    case types.SELECT_NOTE:
      return {
        ...state,
        current_note: action.payload.id,
        status_modal: action.payload.showEventModal,
      }; 
    // MODAL
    case types.STATUS_MODAL:
      return {
        ...state,
        status_modal: action.payload
      };
    default:
      return state;
  }
};

export { UserReducer,initialNotesState };
