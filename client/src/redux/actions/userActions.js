import userApi from '../../api/userApi';
import * as actionTypes from '../../constants/userConstants';
import {ORDER_LIST_MY_RESET} from '../../constants/orderConstants';

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.USER_LOGIN_REQUEST });

    const { data } = await userApi.login(email, password);

    dispatch({
      type: actionTypes.USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: actionTypes.USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('userInfo');
  dispatch({
    type: actionTypes.USER_LOGOUT,
  });
  dispatch({
    type: actionTypes.USER_DETAILS_RESET,
  });
  dispatch({
    type: ORDER_LIST_MY_RESET,
  });

};

export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.USER_REGISTER_REQUEST });

    const { data } = await userApi.register(name, email, password);

    dispatch({
      type: actionTypes.USER_REGISTER_SUCCESS,
      payload: data,
    });

    dispatch({
      type: actionTypes.USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: actionTypes.USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const getUserDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: actionTypes.USER_DETAILS_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const { data } = await userApi.getUserDetails(id, userInfo.token);

    dispatch({
      type: actionTypes.USER_DETAILS_SUCCESS,
      payload: data,
    });

  } catch (error) {
    dispatch({
      type: actionTypes.USER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateUserProfile = (user) => async (dispatch, getState) => {
  try {
    dispatch({ type: actionTypes.USER_UPDATE_PROFILE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const { data } = await userApi.updateUserProfile(user, userInfo.token);

    dispatch({
      type: actionTypes.USER_UPDATE_PROFILE_SUCCESS,
      payload: data,
    });

  } catch (error) {
    dispatch({
      type: actionTypes.USER_UPDATE_PROFILE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
