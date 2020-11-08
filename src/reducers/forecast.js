const initialState = {
  forecast: {},
  loading: false,
  loaded: false,
  error: null,
};

const fetchForecast = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_FORECAST_REQUEST':
      return (state = {
        ...state,
        loading: true,
        error: null,
      });
    case 'FETCH_FORECAST_SUCCESS':
      return (state = {
        ...state,
        forecast: action.payload,
        loading: false,
        loaded: true,
      });
    case 'FETCH_FORECAST_ERROR':
      return (state = {
        ...state,
        error: action.payload,
        loading: false,
        loaded: false,
      });
    default:
      return state;
  }
};

export default fetchForecast;
