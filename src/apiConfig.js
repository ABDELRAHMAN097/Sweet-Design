export const API_URL = 'https://dummyjson.com/products';

export const API_HEADERS = {
  'Authorization': `Bearer ${import.meta.env.VITE_API_TOKEN}`,
  'Content-Type': 'application/json'
};
