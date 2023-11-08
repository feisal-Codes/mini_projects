import { createContext, useContext, useState } from "react";
import { colorsList } from "../colorsOrganizer/data/colorList";
import { v4 as uuidv4 } from "uuid";

const ColorContext = createContext(null);

const ColorProvider = ({ children }) => {
  const [colors, setColors] = useState({
    data: colorsList,
    initialStars: 5,
    initialRatings: 0,
  });
  const { data: colorsData } = colors;

  const onRemoveColor = (id) => {
    let filteredColors = colorsData?.filter((color) => color.id !== id);
    setColors((prev) => ({ ...prev, data: filteredColors }));
  };

  const onAddColor = (formValues) => {
    const color = { id: uuidv4(), rating: 0, ...formValues };
    console.log(color);
    let isPresent = colorsData?.find(
      (color) => color.color === formValues.color
    );
    if (isPresent) {
      return;
    }
    let updatedColors = [color, ...colorsData];
    setColors((prev) => ({ ...prev, data: updatedColors }));
  };

  return (
    <ColorContext.Provider value={[colors, onAddColor, onRemoveColor]}>
      {children}
    </ColorContext.Provider>
  );
};

export default ColorProvider;
export const useColorContext = () => useContext(ColorContext);
