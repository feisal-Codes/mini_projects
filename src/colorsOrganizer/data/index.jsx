import { createContext, useEffect, useState } from "react";
import { StarsRating } from "../../rating/starRating";
import { colorsList } from "./colorList";
import { FaTrash } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
import { useColorContext } from "../../App";

const ColorOrganizer = () => {
  const [colors, setColors] = useColorContext();
  const { data: colorsData } = colors;

  const [formValues, setFormValues] = useState({
    color: "",
    title: "",
  });

  const onRemove = (id) => {
    let filteredColors = colorsData?.filter((color) => color.id !== id);
    setColors((prev) => ({ ...prev, data: filteredColors }));
  };

  const onAddColor = () => {
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

  const onSubmit = (e) => {
    e.preventDefault();
    onAddColor();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div>
      {colorsData?.map((color) => (
        <Color key={color.id} color={color} onRemove={onRemove} />
      ))}

      <AddColorForm
        handleChange={handleChange}
        formValues={formValues}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default ColorOrganizer;

const Color = ({ color, onRemove }) => {
  return (
    <div>
      <div
        onClick={() => {
          onRemove(color.id);
        }}
      >
        <FaTrash />
      </div>
      <h3>{color.title}</h3>
      <div
        style={{
          backgroundColor: color.color,
          width: "80%",
          height: "20px",
        }}
      ></div>
      <p>Hex code: {color.color}</p>
      <StarsRating id={color.id} />
    </div>
  );
};

const AddColorForm = ({ onSubmit, handleChange, formValues }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="color title"
        name="title"
        value={formValues.title}
        onChange={handleChange}
      />
      <input
        type="color"
        onChange={handleChange}
        value={formValues.color}
        name="color"
      />
      <button type="submit"> Add Color</button>
    </form>
  );
};
