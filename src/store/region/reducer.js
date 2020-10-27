export const Types = {
  ASYNC_ADD_REGION: 'region/ASYNC_ADD_REGION',
  ASYNC_ADD_REGION_SUCCESS: 'region/ASYNC_ADD_REGION_SUCCESS',

  ASYNC_GET_ALL_REGIONS: 'region/ASYNC_GET_ALL_REGIONS',
  ASYNC_GET_ALL_REGIONS_SUCCESS: 'region/ASYNC_GET_ALL_REGIONS_SUCCESS',
};

const INIT_STATE = {
  regions: [],
  loading: false,
};

export default function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case Types.ASYNC_ADD_REGION:
      return {
        ...state,
        loading: true,
      };

    case Types.ASYNC_ADD_REGION_SUCCESS: {
      const { region } = action.payload;
      return {
        ...state,
        regions: [...state.regions, region],
        loading: false,
      };
    }

    case Types.ASYNC_GET_ALL_REGIONS:
      return {
        ...state,
        loading: true,
      };

    case Types.ASYNC_GET_ALL_REGIONS_SUCCESS:
      return {
        ...state,
        regions: action.payload?.regions,
        loading: false,
      };

    default:
      return state;
  }
}

export const addRegion = ({ name, clearFields }) => ({
  type: Types.ASYNC_ADD_REGION,
  payload: {
    name,
    clearFields,
  },
});

export const getAllRegion = () => ({
  type: Types.ASYNC_GET_ALL_REGIONS,
});
