import React from "react";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

import "./ShoeCard.css";

const ShoeCard = ({ shoe }) => {
  const { setShowModal, data, setSelectedShoe } = useContext(AppContext);
  const handleClick = (e) => {
    setShowModal(true);
    const shoe = data.find((shoe) => shoe.id === e.target.value);
    setSelectedShoe(shoe);
  };

  return (
    <div className="shoe-card" key={shoe.id}>
      <img src={shoe.image} alt="" />
      <h3>{shoe.title}</h3>
      <p>{shoe.price}$</p>
      <button onClick={handleClick} value={shoe.id}>
        See More
      </button>
    </div>
  );
};

export default ShoeCard;
