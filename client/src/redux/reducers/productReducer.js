import * as actionTypes from '../../constants/productConstants';

export const productsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case actionTypes.PRODUCT_LIST_REQUEST:
      return {
        loading: true,
      };
    case actionTypes.PRODUCT_LIST_SUCCESS:
      return {
        loading: false,
        products: action.payload,
      };
    case actionTypes.PRODUCT_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const productDetailsReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case actionTypes.PRODUCT_DETAILS_REQUEST:
      return { ...state, loading: true };
    case actionTypes.PRODUCT_DETAILS_SUCCESS:
      return { ...state, loading: false, product: action.payload };
    case actionTypes.PRODUCT_DETAILS_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
