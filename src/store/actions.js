import { FAILED, FETCH, LOADING, SEARCH_FETCH } from './type';
import { getProduct, addProduct, addSeller, searchProduct } from '../services/services';

export function fetchDataProduct(id) {
  return async (dispatch) => {
    dispatch(loadingAction(true))
    try {
      const data = await getProduct(id);
      dispatch(fetchAction({ dataProduct: data }))
    } catch(err) {
      dispatch(fetchAction({ data: [] }));
    }
  }
}

export function fetchCreateSeller(data) {
  return async dispatch => {
    dispatch(loadingAction(true));
    try {
      await addSeller(data);
      dispatch(loadingAction(false));
    } catch (err) {
      dispatch(failedAction('failed-insert-data'));
    }
  };
}

export function fetchCreateProduct(data) {
  return async dispatch => {
    dispatch(loadingAction(true));
    try {
      await addProduct(data);
      dispatch(loadingAction(false));
    } catch (err) {
      dispatch(failedAction('failed-insert-data'));
    }
  };
}

export function fetchsearchProduct(nama) {
  return async (dispatch) => {
    dispatch(loadingAction(true))
    try {
      const data = await searchProduct(nama);
      dispatch(searchAction(data))
    } catch(err) {
      dispatch(failedAction(err))
    }
  }
}


export const fetchAction = (data) => ({ type: FETCH, data });
export const loadingAction = (isLoading) => ({ type: LOADING, isLoading });
export const failedAction = payload => ({ type: FAILED, payload });
function searchAction(pencarian) { 
  return { type: SEARCH_FETCH, pencarian }
};