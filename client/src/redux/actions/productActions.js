import productApi from '../../api/productApi';
import * as actionTypes from '../../constants/productConstants';

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.PRODUCT_LIST_REQUEST });
    const { data } = await productApi.getAll();
    dispatch({
      type: actionTypes.PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const productDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.PRODUCT_DETAILS_REQUEST });
    const { data } = await productApi.getOne(id);
    dispatch({
      type: actionTypes.PRODUCT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
