import { useState, createContext, useEffect } from "react";
import { getShoes } from "../API/api";
import axios from "axios";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [shoeId, setShoeId] = useState(1);
  const [data, setData] = useState([]);
  const [selectedShoe, setSelectedShoe] = useState({});
  const [showFormModal, setShowFormModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  useEffect(() => {
    async function fetchMyAPI() {
      setIsLoading(true);
      setData(await shoes());
      setIsLoading(false);
    }
    fetchMyAPI();
  }, []);

  const shoes = async () => {
    try {
      setIsLoading(true);
      const shoesList = await getShoes();
      setIsLoading(false);
      return shoesList;
    } catch (error) {
      console.log(error);
    }
  };

  const deleteShoeItemByID = async (id) => {
    await axios.delete(
      `https://666b3b4d7013419182d2bd3e.mockapi.io/shoeshoe/api/shoes/${selectedShoe.id}`
    );
    setData(await shoes());
    setShowModal(false);
  };

  const addShoe = async (shoeData) => {
    try {
      const response = await axios.post(
        "https://666b3b4d7013419182d2bd3e.mockapi.io/shoeshoe/api/shoes",
        shoeData
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    setData(await shoes());
    setShowFormModal(false);
    return;
  };

  const editShoe = async (shoeData, shoeId) => {
    try {
      const response = await axios.put(
        `https://666b3b4d7013419182d2bd3e.mockapi.io/shoeshoe/api/shoes/${shoeId}`,
        shoeData
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    setShowFormModal(false);
    setShowModal(false);
    setData(await shoes());
  };

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
        deleteShoeItemByID,
        addShoe,
        editShoe,
        isEdit,
        setIsEdit,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
