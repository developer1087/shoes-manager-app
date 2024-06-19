import axios from "axios";

const API_URL =
  "https://666b3b4d7013419182d2bd3e.mockapi.io/shoeshoe/api/shoes";

export const getShoes = async () => {
  try {
    // setIsLoading(true);
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// console.log(getShoes);
