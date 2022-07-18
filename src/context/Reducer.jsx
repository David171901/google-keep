import { types } from "./types";

const initialNotesState = {
  notes: [],
  current_note: null,
  status_modal: false,
  note: {
    title: "",
    content: "",
  },
  note_edit: {},
  search: "",
}

const UserReducer = (state, action) => {
  switch (action.type) {
    // NOTES
    case types.ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes,action.payload.notes],
        note: action.payload.note,
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
    case types.ON_CHANGE_NOTE:
      return {
        ...state,
        note: action.payload,
      }; 
    case types.ON_CHANGE_EDIT:
      return {
        ...state,
        note_edit: action.payload,
      }; 
    // MODAL
    case types.STATUS_MODAL:
      return {
        ...state,
        status_modal: action.payload
      };
    case types.ON_CHANGE_SEARCH:
      return {
        ...state,
        search: action.payload,
      }; 
    default:
      return state;
  }
};

export { UserReducer,initialNotesState };
