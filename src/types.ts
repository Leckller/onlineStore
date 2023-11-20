import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

export type ProductType = {
  id: number;
  title: string;
  thumbnail:string;
  price: number;
  quantity: number;
};

export type CategoriesType = {
  id: string,
  name: string,
};

export type ProductDetailsType = {
  id: number;
  title: string;
  thumbnail:string;
  price: number;
  quantity: number;
  attributes: [];
};

export type ProductAttributesType = {
  id: number;
  name: string;
  value_name: string;
};

export type GlobalState = {
  StoreFetchReducer: {
    loading: boolean,
    categorias: CategoriesType[],
  },
};

export type Dispatch = ThunkDispatch<GlobalState, null, AnyAction>;
