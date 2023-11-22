import { CategoriesType, ProductDetailsType } from '../types';

const UrlBase = import.meta.env.VITE_URL_TOKEN; // .../
const destinos = {
  category: 'sites/MLB/categories',
  searchItens: 'sites/MLB/search?q=',
  categories: 'categories/',
  selecCategorie: '/sites/MLB/search?category=',
};

export const categorias = async ():Promise<CategoriesType[]> => {
  const response = await fetch(UrlBase + destinos.category);
  const data = await response.json();
  return data;
};

export const searchItens = async (destino: string):Promise<ProductDetailsType[]> => {
  const response = await fetch(UrlBase + destinos.searchItens + destino);
  const data = await response.json();
  return data.results;
};

export const searchCategories = async (destino: string):Promise<CategoriesType[]> => {
  const response = await fetch(UrlBase + destinos.categories + destino);
  const data = await response.json();
  return data.children_categories;
};

export const selecCategorie = async (id: string):Promise<ProductDetailsType[]> => {
  const response = await fetch(UrlBase + destinos.selecCategorie + id);
  const data = await response.json();
  return data.results;
};
