import React, { useContext } from "react";
import ShoeCard from "../../components/ShoeCard/ShoeCard";
import ShoeFormModal from "../../modals/ShoeFormModal/ShoeFormModal";
import { AppContext } from "../../context/AppContext";

import "./GalleryPage.css";
import SingleShoeModal from "../../modals/SingleShoeModal/SingleShoeModal";
import Spinner from "../../components/Spinner/Spinner";
const GalleryPage = () => {
  const {
    data,
    showModal,
    selectedShoe,
    showFormModal,
    setShowFormModal,
    setIsEdit,
    isLoading,
  } = useContext(AppContext);

  const handleClick = () => {
    setIsEdit(false);
    setShowFormModal(true);
  };

  return (
    <div className="main-container">
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <div className="gallery-container">
            {data.map((shoe) => {
              return <ShoeCard key={shoe.id} shoe={shoe} />;
            })}
            {showModal && <SingleShoeModal selectedShoe={selectedShoe} />}
            {showFormModal && <ShoeFormModal />}
          </div>
          <button onClick={handleClick} className="add-btn">
            ADD NEW SHOE
          </button>
        </>
      )}
    </div>
  );
};

export default GalleryPage;
