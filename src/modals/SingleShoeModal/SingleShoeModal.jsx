import React, { useContext } from "react";

import "./SingleShoeModal.css";
import { AppContext } from "../../context/AppContext";

const SingleShoeModal = ({ selectedShoe }) => {
  const { showModal, setShowModal } = useContext(AppContext);

  const handleClick = () => {
    setShowModal(false);
  };
  return (
    <div className="modal-container">
      <div onClick={handleClick}>&times;</div>
      <img src={selectedShoe.image} alt="" />
      <h3>{selectedShoe.title}</h3>
      <p>{selectedShoe.price}$</p>
    </div>
  );
};

export default SingleShoeModal;
