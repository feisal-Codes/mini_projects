import { useReducer } from "react";
import reducer from "./reducers/puzzleReducer";
import "./style.css";

const Puzzle = () => {
  const [state, dispatch] = useReducer(reducer, {
    items: ["4", "1", "2", "7", "6", "3", null, "5", "8"],
    isComplete: false,
    moves: 0,
  });
  console.log(state);

  return (
    <div className="Puzzle">
      {state.isComplete ? (
        <>
          <div className="Puzzle-squares">
            {state.items.map((item, idx) => (
              <div
                className={`Puzzle-square ${item ? "" : "Puzzle-square-empty"}`}
                key={idx}
              >
                <span style={{ color: "white" }}>{item}</span>
              </div>
            ))}
          </div>
          <button onClick={() => dispatch({ type: "restart" })}>
            Restart Game
          </button>
          <div>Game Over! moves made to win: {state.moves}</div>
        </>
      ) : (
        <>
          <div className="Puzzle-squares">
            {state.items.map((item, idx) => (
              <div
                className={`Puzzle-square ${item ? "" : "Puzzle-square-empty"}`}
                key={idx}
                onClick={() => dispatch({ type: "move", payload: idx })}
              >
                <span style={{ color: "white" }}>{item}</span>
              </div>
            ))}
          </div>
          <button onClick={() => dispatch({ type: "restart" })}>
            Reset Game
          </button>
          <div>Moves:{state.moves}</div>
        </>
      )}
    </div>
  );
};

export default Puzzle;
