import {
  USER_GET_ADD,
  USER_GET_ERROR,
  USER_GET_LOADING,
  USER_GET_SUCCESS,
  USER_GET_UPDATE,
  USER_GET_DELETE,
  USER_GET_LOGIN,
} from "./user.types";
import axios from "axios";
import { addUserApi, deletePostApi, loginApi, postApi } from "./userApi";

export const addUsers = (payload) => async (dispatch) => {
  dispatch({ type: USER_GET_LOADING });
  try {
    let data = await addUserApi(payload);

    dispatch({ type: USER_GET_ADD, payload: data });
  } catch (err) {
    dispatch({ type: USER_GET_ERROR });
  }
};

export const LoginUser = (payload) => async (dispatch) => {
  dispatch({ type: USER_GET_LOADING });
  try {
    let data = await loginApi(payload);
    console.log(data);
    localStorage.setItem("token", data.token);
    localStorage.setItem("name", data.name);
    localStorage.setItem("_id", data._id);
    dispatch({ type: USER_GET_LOGIN });
  } catch (err) {
    dispatch({ type: USER_GET_ERROR });
  }
};
export const getUsers = () => async (dispatch) => {
  dispatch({ type: USER_GET_LOADING });
  try {
    let data = await postApi();

    dispatch({ type: USER_GET_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: USER_GET_ERROR });
  }
};

export const updateUsers = (id, data) => async (dispatch) => {
  try {
    await axios.patch(
      `https://agency-backend-e2v8.onrender.com/users/update/${id}`,
      data,
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );

    dispatch(getUsers());
  } catch (err) {
    throw err;
  }
};

export const deleteUsers = (id) => async (dispatch) => {
  try {
    let data = await deletePostApi(id);
    dispatch({
      type: USER_GET_DELETE,
      payload: id,
    });
    dispatch(getUsers());
  } catch (e) {
    dispatch({
      type: USER_GET_ERROR,
      payload: e,
    });
  }
};
