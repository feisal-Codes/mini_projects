import { useState } from "react";
import { StarsRating } from "../rating/starRating";
import { FaTrash } from "react-icons/fa";
import { useColorContext } from "../context/ColorProvider";

const ColorOrganizer = () => {
  const [colors, onAddColor] = useColorContext();
  const { data: colorsData } = colors;

  const [formValues, setFormValues] = useState({
    color: "",
    title: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    onAddColor(formValues);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div>
      {colorsData?.map((color) => (
        <Color key={color.id} color={color} />
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

const Color = ({ color }) => {
  const [, , onRemoveColor] = useColorContext();

  return (
    <div>
      <div
        onClick={() => {
          onRemoveColor(color.id);
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
