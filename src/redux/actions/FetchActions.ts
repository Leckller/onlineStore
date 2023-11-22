import { categorias, searchCategories,
  searchItens, selecCategorie } from '../../services/Fetch';
import { CategoriesType, Dispatch, ProductDetailsType } from '../../types';

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';

export const ERROR_FETCH = 'ERROR_FETCH';
export const errorFetch = (error: any) => ({
  type: ERROR_FETCH,
  payload: error,
});

export const SUCESS_FETCH_CAT = 'SUCESS_FETCH_CAT';
export const sucessFetchCat = (data:CategoriesType[]) => ({
  type: SUCESS_FETCH_CAT,
  payload: data,
});

export const INI_FETCH = 'INI_FETCH';
export const iniFetch = (load: string) => ({
  type: INI_FETCH,
  payload: load,
});

export const fetchCategories = () => {
  return async (disp:Dispatch) => {
    disp(iniFetch('categories'));
    try {
      const data = await categorias();
      disp(sucessFetchCat(data));
    } catch (err: any) {
      disp(errorFetch(err));
    }
  };
};

export const SUCESS_FETCH_SEARCH = 'SUCESS_FETCH_SEARCH';
export const sucessFetchSearch = (data: ProductDetailsType[]) => ({
  type: SUCESS_FETCH_SEARCH,
  payload: data,
});

export const fetchSearch = (endereco: string) => {
  return async (disp:Dispatch) => {
    disp(iniFetch('search'));
    try {
      const data = await searchItens(endereco);
      disp(sucessFetchSearch(data));
    } catch (err: any) {
      disp(errorFetch(err));
    }
  };
};

export const SUCESS_FETCH_CATEGORIES_RESULTS = 'SUCESS_FETCH_CATEGORIES_RESULTS';
export const sucessFetchCategoriesResults = (data: CategoriesType[]) => ({
  type: SUCESS_FETCH_CATEGORIES_RESULTS,
  payload: data,
});

export const fetchCategoriesResults = (destino: string) => {
  return async (disp:Dispatch) => {
    disp(iniFetch('categoriesSearch'));
    try {
      const data = await searchCategories(destino);
      disp(sucessFetchCategoriesResults(data));
    } catch (err: any) {
      disp(errorFetch(err));
    }
  };
};

export const SUCESS_FETCH_SELEC_CATEGORIES = 'SUCESS_FETCH_SELEC_CATEGORIES';
export const sucessFetchSelecCategories = (data: ProductDetailsType[]) => ({
  type: SUCESS_FETCH_SELEC_CATEGORIES,
  payload: data,
});

export const fetchSelecCategorie = (id: string) => {
  return async (disp:Dispatch) => {
    disp(iniFetch('selecCat'));
    try {
      const data = await selecCategorie(id);
      disp(sucessFetchSelecCategories(data));
    } catch (err: any) {
      disp(errorFetch(err));
    }
  };
};
