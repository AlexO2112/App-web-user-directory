// Servicio para manejar las peticiones a la API con Axios
import axios from 'axios';

// Creamos una instancia de axios con la URL base de JSONPlaceholder
const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

// Función para obtener todos los usuarios
export const getUsers = async () => {
  try {
    const response = await api.get('/users');
    return response.data;
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    throw error;
  }
};

// Función para obtener un usuario específico por ID
export const getUserById = async (id) => {
  try {
    const response = await api.get(`/users/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error al obtener usuario con ID ${id}:`, error);
    throw error;
  }
};

export default api;
