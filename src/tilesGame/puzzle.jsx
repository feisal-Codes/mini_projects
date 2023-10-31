import { useReducer } from "react";
import "./style.css";
import puzzleReducer from "./reducers/puzzleReducer";
import useUndoReducer from "./hooks/useUndoReducer";

// const Puzzle = () => {
//   const [state, dispatch] = useUndoReducer(puzzleReducer, {
//     items: ["4", "1", "2", "7", "6", "3", null, "5", "8"],
//     isComplete: false,
//     moves: 0,
//   });
//   console.log("**************************");
//   console.log(state.items);
//   console.log("last state ");

//   return (
//     <div className="Puzzle">
//       {state.isComplete ? (
//         <>
//           <div className="Puzzle-squares">
//             {state.items.map((item, idx) => (
//               <div
//                 className={`Puzzle-square ${item ? "" : "Puzzle-square-empty"}`}
//                 key={idx}
//               >
//                 <span style={{ color: "white" }}>{item}</span>
//               </div>
//             ))}
//           </div>
//           <button onClick={() => dispatch({ type: "restart" })}>
//             Restart Game
//           </button>
//           <div>Game Over! moves made to win: {state.moves}</div>
//         </>
//       ) : (
//         <>
//           <div className="Puzzle-squares">
//             {state.items.map((item, idx) => (
//               <div
//                 className={`Puzzle-square ${item ? "" : "Puzzle-square-empty"}`}
//                 key={idx}
//                 onClick={() => dispatch({ type: "move", payload: idx })}
//               >
//                 <span style={{ color: "white" }}>{item}</span>
//               </div>
//             ))}
//           </div>
//           <button onClick={() => dispatch({ type: "restart" })}>
//             Reset Game
//           </button>
//           <button onClick={() => dispatch({ type: "undo" })}>Undo</button>
//           <button onClick={() => dispatch({ type: "redo" })}>redo</button>
//           <div>Moves:{state.moves}</div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Puzzle;

const Puzzle = () => {
  const [state, dispatch] = useUndoReducer(puzzleReducer, {
    items: ["4", "1", "2", "7", "6", "3", null, "5", "8"],
  });
  return (
    <div className="Puzzle">
      <div className="Puzzle-squares">
        {state.items?.map((s, i) => (
          <div
            className={`Puzzle-square ${s ? "" : "Puzzle-square-empty"}`}
            key={`square-${i}`}
            onClick={() => dispatch({ type: "move", payload: i })}
          >
            {s}
          </div>
        ))}
      </div>
      <div className="Puzzle-controls">
        <button
          className="Puzzle-shuffle"
          onClick={() => dispatch({ type: "shuffle" })}
        >
          Shuffle
        </button>
        <button
          className="Puzzle-reset"
          onClick={() => dispatch({ type: "reset" })}
        >
          Reset
        </button>
      </div>
      <div className="Puzzle-controls">
        <button
          className="Puzzle-undo"
          onClick={() => dispatch({ type: "undo" })}
        >
          Undo
        </button>
        <button
          className="Puzzle-redo"
          onClick={() => dispatch({ type: "redo" })}
        >
          Redo
        </button>
        3.2 Create an Undo Feature | 81
      </div>
      {state.complete && <div className="Puzzle-complete">Complete!</div>}
    </div>
  );
};
export default Puzzle;
