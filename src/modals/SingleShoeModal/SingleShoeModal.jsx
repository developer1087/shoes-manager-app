import React, { useEffect, useContext } from "react";
import axios from "axios";

import "./SingleShoeModal.css";
import { AppContext } from "../../context/AppContext";

const SingleShoeModal = ({ selectedShoe }) => {
  const {
    showModal,
    setShowModal,
    setShowFormModal,
    data,
    deleteShoeItemByID,
    setIsEdit,
  } = useContext(AppContext);

  const handleXClick = () => {
    setShowModal(false);
  };
  const handleEditButton = () => {
    setIsEdit(true);
    setShowFormModal(true);
  };

  const handleDeleteButton = () => {
    return deleteShoeItemByID();
  };
  return (
    <div className="modal-container">
      <div onClick={handleXClick} className="x">
        &times;
      </div>
      <img src={selectedShoe.image} alt="" />
      <h3>{selectedShoe.title}</h3>
      <p>{selectedShoe.price}$</p>
      <div className="buttons-container">
        <button onClick={handleEditButton}>Edit Shoe</button>
        <button onClick={handleDeleteButton}>Delete Shoe</button>
      </div>
    </div>
  );
};

export default SingleShoeModal;
