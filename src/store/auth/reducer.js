export const Types = {
  ASYNC_LOGIN: 'auth/ASYNC_LOGIN',
  ASYNC_LOGIN_SUCCESS: 'auth/ASYNC_LOGIN_SUCCESS',

  ASYNC_SIGNUP: 'auth/ASYNC_SIGNUP',
  ASYNC_SIGNUP_SUCCESS: 'auth/ASYNC_SIGNUP_SUCCESS',
};

const initialState = {
  token: null,
  isLogged: false,
  loading: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.ASYNC_LOGIN:
      return {
        ...state,
        loading: true,
      };

    case Types.ASYNC_LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        isLogged: true,
        loading: false,
      };

    case Types.ASYNC_SIGNUP:
      return {
        ...state,
        loading: true,
      };

    case Types.ASYNC_SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}

export const login = ({ email, password, history }) => ({
  type: Types.ASYNC_LOGIN,
  payload: {
    email,
    password,
    history,
  },
});

export const signUp = ({ name, email, password, history }) => ({
  type: Types.ASYNC_SIGNUP,
  payload: {
    name,
    email,
    password,
    history,
  },
});
