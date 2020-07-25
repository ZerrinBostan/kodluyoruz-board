import * as types from './types';

const initialState = {
  categories: [],
  cardList: [],
};

const todosReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.CATEGORY_ADD:
      return {
        ...state,
        categories: [...state.categories, payload]
      }
    case types.CARD_ADD:
      return {
        ...state,
        cardList: [...state.cardList, payload],
      };
    case types.CARD_UPDATE:
      return {
        ...state,
        cardList: [
          ...state.cardList.filter(item => item.id !== payload.id),
          payload,
        ]
      };
    case types.CARD_DELETE:
      return {
        ...state,
        cardList: [...state.cardList.filter((item) => item.id !== payload)],
      };
    default:
      return state;
  }
};

export default todosReducer;
