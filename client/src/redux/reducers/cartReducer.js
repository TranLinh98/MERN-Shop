import * as actionTypes from '../../constants/cartConstants';

export const cartReducer = (
  state = { cartItems: [], shippingAddress: {} },
  action
) => {
  switch (action.type) {
    case actionTypes.CART_ADD_ITEM:
      const itemAdded = action.payload;
      const existItem = state.cartItems.find(
        (item) => item.product === itemAdded.product
      );
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.product === existItem.product ? itemAdded : item
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, itemAdded],
        };
      }
    case actionTypes.CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.product !== action.payload
        ),
      };
    case actionTypes.CART_SAVE_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: action.payload,
      };
    case actionTypes.CART_SAVE_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: action.payload,
      };
    default:
      return state;
  }
};
