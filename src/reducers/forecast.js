const initialState = {
  forecast: {},
  loading: false,
  loaded: false,
};

const fetchForecast = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_FORECAST_REQUEST':
      return (state = {
        ...state,
        loading: true,
      });
    case 'FETCH_FORECAST_SUCCESS':
      return (state = {
        ...state,
        forecast: action.payload,
        loading: false,
        loaded: true,
      });
    default:
      return state;
  }
};

export default fetchForecast;
