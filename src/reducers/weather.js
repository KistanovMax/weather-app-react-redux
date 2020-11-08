const fetchWeather = (
  state = {
    weather: {},
  },
  action
) => {
  switch (action.type) {
    case 'FETCH_WEATHER':
      return (state = {
        ...state,
        weather: action.payload,
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
