import { useContext, useEffect, useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useColorContext } from "../App";

const createArr = (length) => {
  let arr = [...Array(length)];
  return arr;
};

const Rating = () => {
  return (
    <>
      <StarsRating stars={5} />
    </>
  );
};

export default Rating;

export const StarsRating = ({ id }) => {
  const [colors, setColors] = useColorContext();
  const { data, initialStars, initialRatings } = colors;
  const [selectedStars, setSelectedStars] = useState(initialRatings);

  const onSelect = (idx) => {
    let updatedColors = data?.map((color) => {
      if (id === color.id) {
        return { ...color, rating: idx + 1 };
      }
      return { ...color };
    });
    setSelectedStars(idx + 1);
    setColors((prevState) => ({ ...prevState, data: updatedColors }));
  };

  return (
    <div style={{ display: "flex", gap: "2px", marginTop: "20px" }}>
      {createArr(initialStars).map((star, idx) => {
        return (
          <Stars
            key={idx}
            selected={selectedStars > idx}
            onSelect={() => onSelect(idx)}
          />
        );
      })}
    </div>
  );
};

const Stars = ({ selected, onSelect }) => {
  return (
    <>
      {selected ? (
        <AiFillStar onClick={onSelect} color={"red"} />
      ) : (
        <AiOutlineStar onClick={onSelect} color={"red"} />
      )}
    </>
  );
};
