import { ProductDetailsType } from '../../types';

export const ADD_ITEM = 'ADD_ITEM';
export const addItem = (item: ProductDetailsType) => ({
  type: ADD_ITEM,
  payload: item,
}
);
