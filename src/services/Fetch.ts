import { CategoriesType } from '../types';

const UrlBase = import.meta.env.VITE_URL_TOKEN; // .../
const destinos = {
  category: 'sites/MLB/categories',
};

export const categorias = async ():Promise<CategoriesType[]> => {
  const response = await fetch(UrlBase + destinos.category);
  const data = await response.json();
  return data;
};
