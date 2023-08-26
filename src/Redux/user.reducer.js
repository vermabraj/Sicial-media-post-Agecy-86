import {
  USER_GET_ADD,
  USER_GET_ERROR,
  USER_GET_LOADING,
  USER_GET_SUCCESS,
  USER_GET_UPDATE,
  USER_GET_DELETE,
  USER_GET_LOGIN,
} from "./user.types";

let initState = {
  loading: false,
  error: false,
  data: [],
};

const postReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case USER_GET_ADD: {
      return {
        ...state,
        payload,
      };
    }
    case USER_GET_UPDATE: {
      let edited = state.data.map((el) => {
        if (el._id === payload.id) {
          return payload.data;
        } else return el;
      });

      return {
        ...state,
        data: edited,
        loading: false,
        error: false,
      };
    }
    case USER_GET_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }

    case USER_GET_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case USER_GET_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: payload,
      };
    }

    case USER_GET_DELETE: {
      return {
        ...state,
        data: state.data.filter((product) => product._id !== payload),
      };
    }

    case USER_GET_LOGIN: {
      return {
        ...state,
        payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default postReducer;
