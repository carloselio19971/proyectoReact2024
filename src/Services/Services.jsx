import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

export const readBurgerMenu = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/menu`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener los menús de hamburguesas:', error);
    throw error;
  }
};

export const readPromoBurgers = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/promociones_online`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener las promociones de hamburguesas:', error);
    throw error;
  }
};