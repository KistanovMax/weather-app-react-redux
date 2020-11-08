const initialState = {
  weather: {},
  loading: false,
  loaded: false,
  error: null,
};

const fetchWeather = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_WEATHER_REQUEST':
      return (state = {
        ...state,
        loading: true,
        error: null,
      });
    case 'FETCH_WEATHER_SUCCESS':
      return (state = {
        ...state,
        weather: action.payload,
        loading: false,
        loaded: true,
      });
    case 'FETCH_WEATHER_ERROR':
      return (state = {
        ...state,
        error: action.payload,
        loading: false,
        loaded: false,
      });
    case 'PRESS_FORECAST_ITEM':
      return (state = {
        ...state,
        weather: action.payload,
      });

    default:
      return state;
  }
};

export default fetchWeather;
