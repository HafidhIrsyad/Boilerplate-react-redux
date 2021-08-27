import { FAILED, FETCH, LOADING, SEARCH_FETCH } from './type';

export const initialState = {
  counter: 1,
  alami: [],
  message: 'Berhasil',
  isLoading: false,
  pencarian: [],
  sellers: [],
}

export default function reducer (state=initialState, action) {
  const { data, pencarian, message } = action;

  switch (action.type) {
    case FAILED:
    return {
      ...state,
      isLoading: false,
      message,
    }
    case LOADING:
    return {
      ...state,
      isLoading: true
    }
    case FETCH:
    return {
      ...state,
      isLoading: false,
      ...data,
      message:''
    }
    case SEARCH_FETCH:
      return {
        ...state,
        isLoading: false,
        pencarian,
      };
    default:
      return state;
  }
}