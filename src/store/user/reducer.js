export const Types = {
  ASYNC_GET_USER: 'user/ASYNC_GET_USER',
  ASYNC_GET_USER_SUCCESS: 'user/ASYNC_GET_USER_SUCCESS',
};

const INIT_STATE = {
  id: '',
  name: '',
  email: '',
  loading: false,
};

export default function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case Types.ASYNC_GET_USER:
      return {
        ...state,
        loading: true,
      };

    case Types.ASYNC_GET_USER_SUCCESS:
      return {
        ...state,
        id: action.payload.id,
        name: action.payload.name,
        email: action.payload.email,
        loading: false,
      };

    default:
      return state;
  }
}
