import { useContext, useRef, useState } from "react";
import axios from "axios";

import "./ShoeFormModal.css";
import { AppContext } from "../../context/AppContext";

const ShoeFormModal = () => {
  const { setShowFormModal, addShoe, editShoe, isEdit, selectedShoe } =
    useContext(AppContext);
  const [shoeState, setShoeState] = useState(
    isEdit
      ? {
          image: selectedShoe.image,
          title: selectedShoe.title,
          price: selectedShoe.price,
        }
      : {
          image: "",
          title: "",
          price: "",
        }
  );

  const handleXClick = () => {
    setShowFormModal(false);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setShoeState({
      ...shoeState,
      [e.target.name]: value,
    });
  };

  const buttonRef = useRef(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (buttonRef.current && !buttonRef.current.disabled) {
      buttonRef.current.disabled = true;
      // Perform the action
      // After the action is complete, reset buttonRef.current.disabled to false
    }

    console.log("here");
    const shoeData = {
      image: shoeState.image,
      title: shoeState.title,
      price: shoeState.price,
    };
    const shoeId = selectedShoe.id;
    shoeState.title.length >= 3
      ? isEdit
        ? editShoe(shoeData, shoeId)
        : addShoe(shoeData)
      : alert("Shoe Title must be at least 3 characters long.");
  };
  return (
    <div className="form-container">
      <div onClick={handleXClick} className="x">
        &times;
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Shoe Image</label>
        <input
          type="text"
          name="image"
          placeholder="Enter Shoe Image Path"
          value={shoeState.img}
          onChange={handleChange}
        />
        <label htmlFor="">Shoe Title</label>
        <input
          type="text"
          name="title"
          placeholder="Enter Shoe Title"
          value={shoeState.title}
          onChange={handleChange}
        />
        <label htmlFor="">Shoe Price</label>
        <input
          type="number"
          name="price"
          placeholder="Enter Shoe Price"
          value={shoeState.price}
          onChange={handleChange}
        />
        <button type="submit" ref={buttonRef}>
          {isEdit ? "Edit Shoe" : "Add Shoe"}
        </button>
      </form>
    </div>
  );
};

export default ShoeFormModal;
