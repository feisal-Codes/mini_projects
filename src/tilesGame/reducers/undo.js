// import lodash from "lodash";
// const undo = (reducer) => (state, action) => {
//   let {
//     undoHistory = [],

//     undoActions = [],
//     ...innerState
//   } = lodash.cloneDeep(state);
//   switch (action.type) {
//     case "undo": {
//       if (undoActions.length > 0) {
//         undoActions.pop();
//         innerState = undoHistory.pop();
//       }
//       break;
//     }
//     case "redo": {
//       if (undoHistory.length > 0) {
//         const lastUndo = undoHistory.pop();
//         undoActions.push(action); // The original redo action
//         innerState = { ...lastUndo, moves: innerState.moves + 1 };
//       }
//       break;
//     }
//     default: {
//       undoHistory = [...undoHistory, { ...innerState }];
//       undoActions = [...undoActions, action];
//       innerState = reducer(innerState, action);
//     }
//   }
//   return { ...innerState, undoHistory, undoActions };
// };

// export default undo;
const undo = (reducer) => (state, action) => {
  let {
    undoHistory = [],
    redoHistory = [],
    undoActions = [],
    redoActions = [],
    ...innerState
  } = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case "undo": {
      if (undoActions.length > 0) {
        const lastUndo = undoHistory.pop();
        redoActions.push(undoActions.pop()); // Move the last undo action to redo actions
        redoHistory.push({ ...innerState });
        innerState = { ...lastUndo, moves: innerState.moves - 1 };
      }
      break;
    }
    case "redo": {
      if (redoActions.length > 0) {
        const lastRedo = redoHistory.pop();
        undoActions.push(redoActions.pop()); // Move the last redo action to undo actions
        undoHistory.push({ ...innerState });
        innerState = { ...lastRedo, moves: innerState.moves + 1 };
      }
      break;
    }
    default: {
      undoHistory = [...undoHistory, { ...innerState }];
      undoActions = [...undoActions, action];
      // Clear redo history when a new action is taken
      redoHistory = [];
      redoActions = [];
      innerState = reducer(innerState, action);
    }
  }
  return { ...innerState, undoHistory, redoHistory, undoActions, redoActions };
};

export default undo;
