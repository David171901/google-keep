import { types } from "./types";

const UserReducer = (state, action) => {
  const { payload} = action;
  switch (action.type) {
    case types.HANDLE_CHANGE_CREATEAREA:
      return {
      };
    case types.ON_SUMBIT_CREATEAREA:
      return {
      };
    default:
      return state;
  }
};

export { UserReducer };
