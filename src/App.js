import logo from "./logo.svg";
import "./App.css";
import Puzzle from "./tilesGame/puzzle";
import Rating from "./rating/starRating";
import ColorOrganizer from "./colorsOrganizer/data";
import { createContext, useContext, useState } from "react";
import { colorsList } from "./colorsOrganizer/data/colorList";

export const ColorContext = createContext(null);
export const UserContext = createContext(null);

function App() {
  const [colors, setColors] = useState({
    data: colorsList,
    initialStars: 5,
    initialRatings: 0,
  });
  return (
    <div className="App">
      {/* <Puzzle /> */}
      {/* <Rating /> */}

      <ColorContext.Provider value={[colors, setColors]}>
        <UserContext.Provider value="feisal">
          <ColorOrganizer />
        </UserContext.Provider>
      </ColorContext.Provider>
    </div>
  );
}

export const useColorContext = () => useContext(ColorContext);
export const useUserContext = () => useContext(ColorContext);
export default App;
