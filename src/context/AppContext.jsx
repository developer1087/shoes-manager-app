import { useState, createContext, useEffect } from "react";
import { getShoes } from "../API/api";

const AppContext = createContext();

const shoes = async () => {
  try {
    const shoesList = await getShoes();
    return shoesList;
  } catch (error) {
    console.log(error);
  }
};

const AppProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [shoeId, setShoeId] = useState(1);
  const [data, setData] = useState([]);
  const [selectedShoe, setSelectedShoe] = useState({});
  const [showFormModal, setShowFormModal] = useState(false);
  useEffect(() => {
    async function fetchMyAPI() {
      setData(await shoes());
    }
    fetchMyAPI();
  }, []);
  console.log(data);
  return (
    <AppContext.Provider
      value={{
        data,
        setData,
        showModal,
        setShowModal,
        shoeId,
        setShoeId,
        selectedShoe,
        setSelectedShoe,
        showFormModal,
        setShowFormModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
