export const Types = {
  ASYNC_ADD_COUNTRY: 'country/ASYNC_ADD_COUNTRY',
  ASYNC_ADD_COUNTRY_SUCCESS: 'country/ASYNC_ADD_COUNTRY_SUCCESS',

  ASYNC_GET_COUNTRIES: 'country/ASYNC_GET_COUNTRIES',
  ASYNC_GET_COUNTRIES_SUCCESS: 'country/ASYNC_GET_COUNTRIES_SUCCESS',
};

const INIT_STATE = {
  countries: [],
  loading: false,
};

export default function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case Types.ASYNC_ADD_COUNTRY:
      return {
        ...state,
        loading: true,
      };

    case Types.ASYNC_ADD_COUNTRY_SUCCESS:
      return {
        ...state,
        countries: [...state.countries, action.payload?.country],
        loading: false,
      };

    case Types.ASYNC_GET_COUNTRIES:
      return {
        ...state,
        loading: true,
      };

    case Types.ASYNC_GET_COUNTRIES_SUCCESS:
      return {
        ...state,
        countries: action.payload.countries,
        loading: false,
      };

    default:
      return state;
  }
}

export const addCountry = ({
  name,
  population,
  flag,
  regionId,
  clearFields,
}) => ({
  type: Types.ASYNC_ADD_COUNTRY,
  payload: {
    name,
    population,
    flag,
    regionId,
    clearFields,
  },
});

export const getAllCountries = () => ({
  type: Types.ASYNC_GET_COUNTRIES,
});
