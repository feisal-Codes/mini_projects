const trySwap = (newItems, position, newPosition, moves) => {
  let newMoves = moves || 0; // Initialize moves if it's not already defined

  if (newItems[newPosition] === null) {
    let temp = newItems[position];
    newItems[position] = newItems[newPosition];
    newItems[newPosition] = temp;
    newMoves += 1;
  }
  console.log("this is new moves");
  console.log(newMoves);
  return newMoves;
};
const CORRECT = ["1", "2", "3", "4", "5", "6", "7", "8", null];

const arrayIsEqual = (newItems, correct) => {
  console.log("we are here");
  console.log(newItems, correct);
  for (let i = 0; i < newItems.length; i++) {
    if (newItems[i] !== correct[i]) {
      return false;
    }
  }
  return true;
};

const reducer = (state, action) => {
  let position = action.payload;
  let newmoves = state.moves;
  const newItems = [...state.items];
  const col = position % 3;
  switch (action.type) {
    case "move": {
      if (position < 6) {
        newmoves = trySwap(newItems, position, position + 3, newmoves);
      }

      if (position > 2) {
        newmoves = trySwap(newItems, position, position - 3, newmoves);
      }
      if (col < 2) {
        newmoves = trySwap(newItems, position, position + 1, newmoves);
      }
      if (col > 0) {
        newmoves = trySwap(newItems, position, position - 1, newmoves);
      }

      return {
        ...state,
        items: newItems,
        isComplete: arrayIsEqual(newItems, CORRECT),
        moves: newmoves,
      };
    }
    case "restart": {
      return {
        items: ["4", "1", "2", "7", "6", "3", null, "5", "8"],
        isComplete: false,
        moves: 0,
      };
    }

    default:
      return state;
  }
};

export default reducer;
