import * as types from './types';

export const cardAdd = (payload) => {
  return {
    type: types.CARD_ADD,
    payload,
  };
};

export const cardDelete = (payload) => {
  return {
    type: types.CARD_DELETE,
    payload,
  };
};

export const cardUpdate = (payload) => {
  return {
    type: types.CARD_UPDATE,
    payload,
  }
}

export const categoryAdd = (payload) => {
  return {
    type: types.CATEGORY_ADD,
    payload,
  }
}
