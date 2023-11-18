import logo from "./logo.svg";
import "./App.css";
import Puzzle from "./tilesGame/puzzle";
import Rating from "./rating/starRating";
import ColorOrganizer from "./colorsOrganizer";
import MultiStepForm from "./mutliStepForm";
import FormProvider from "./mutliStepForm/context/formProvider";

function App() {
  return (
    <div className="App">
      {/* <Puzzle /> */}
      {/* <Rating /> */}
      <ColorOrganizer />
      {/* <MultiStepForm /> */}
    </div>
  );
}

export default App;
