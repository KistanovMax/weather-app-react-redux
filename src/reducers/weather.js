const initialState = {
  weather: {},
  loading: false,
  loaded: false,
};

const fetchWeather = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_WEATHER_REQUEST':
      return (state = {
        ...state,
        loading: true,
      });
    case 'FETCH_WEATHER_SUCCESS':
      return (state = {
        ...state,
        weather: action.payload,
        loading: false,
        loaded: true,
      });
    case 'CLICK_FORECAST_ITEM':
      return (state = {
        ...state,
        weather: action.payload,
      });

    default:
      return state;
  }
};

export default fetchWeather;
