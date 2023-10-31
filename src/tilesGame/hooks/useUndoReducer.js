import undo from "../reducers/undo";
import { useReducer } from "react";

const useUndoReducer = (reducer, initialState) => {
  console.log(initialState);
  return useReducer(undo(reducer), initialState);
};

export default useUndoReducer;
