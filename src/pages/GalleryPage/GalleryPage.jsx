import React, { useContext } from "react";
import ShoeCard from "../../components/ShoeCard/ShoeCard";
import ShoeFormModal from "../../modals/ShoeFormModal/ShoeFormModal";
import { AppContext } from "../../context/AppContext";

import "./GalleryPage.css";
import SingleShoeModal from "../../modals/SingleShoeModal/SingleShoeModal";
const GalleryPage = () => {
  const { data, showModal, selectedShoe, showFormModal, setShowFormModal } =
    useContext(AppContext);

  const handleClick = () => {
    setShowFormModal(true);
  };

  return (
    <div className="main-container">
      <div className="gallery-container">
        {data.map((shoe) => {
          return <ShoeCard key={shoe.id} shoe={shoe} />;
        })}
        {showModal && <SingleShoeModal selectedShoe={selectedShoe} />}
        {showFormModal && <ShoeFormModal />}
      </div>
      <button onClick={handleClick}>ADD NEW SHOE</button>
    </div>
  );
};

export default GalleryPage;
