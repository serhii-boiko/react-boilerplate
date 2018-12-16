import { ADD, ADD_SUCCESS, REMOVE, REMOVE_SUCCESS } from './actionTypes';

export const add = () => ({
  type: ADD,
});

export const addSuccess = () => ({
  type: ADD_SUCCESS,
});

export const remove = () => ({
  type: REMOVE,
});

export const removeSuccess = () => ({
  type: REMOVE_SUCCESS,
});

export type Action =
  | { type: ADD }
  | { type: ADD_SUCCESS }
  | { type: REMOVE }
  | { type: REMOVE_SUCCESS };
