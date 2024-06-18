import { useState } from "react";
import axios from "axios";

import "./ShoeFormModal.css";

const ShoeFormModal = () => {
  const [shoeState, setShoeState] = useState({
    img: "",
    title: "",
    price: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setShoeState({
      ...shoeState,
      [e.target.name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("here");
    const shoeData = {
      img: shoeState.img,
      title: shoeState.title,
      price: shoeState.price,
    };
    try {
      const response = await axios.post(
        "https://666b3b4d7013419182d2bd3e.mockapi.io/shoeshoe/api/shoes",
        shoeData
      );
      console.log(response);
      console.log(shoeData, "x");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Shoe Image</label>
        <input
          type="text"
          name="img"
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
        <button type="submit">Add Shoe</button>
      </form>
    </div>
  );
};

export default ShoeFormModal;
