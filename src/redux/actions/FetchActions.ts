import { categorias } from '../../services/Fetch';
import { CategoriesType, Dispatch } from '../../types';

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';

export const ERROR_FETCH = 'ERROR_FETCH';
export const errorFetch = (error: any) => ({
  type: ERROR_FETCH,
  payload: error,
});

export const SUCESS_FETCH = 'SUCESS_FETCH';
export const sucessFetch = (data:CategoriesType[]) => ({
  type: SUCESS_FETCH,
  payload: data,
});

export const INI_FETCH = 'INI_FETCH';
export const iniFetch = () => ({
  type: INI_FETCH,
});

export const fetchCategories = () => {
  return async (disp:Dispatch) => {
    disp(iniFetch());
    try {
      const data = await categorias();
      disp(sucessFetch(data));
    } catch (err: any) {
      disp(errorFetch(err));
    }
  };
};
