import logo from "./logo.svg";
import "./App.css";
import Puzzle from "./tilesGame/puzzle";
import Rating from "./rating/starRating";
import ColorOrganizer from "./colorsOrganizer";

function App() {
  return (
    <div className="App">
      {/* <Puzzle /> */}
      {/* <Rating /> */}
      <ColorOrganizer />
    </div>
  );
}

export default App;
