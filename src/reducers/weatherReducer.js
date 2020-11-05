const fetchWeather = (
  state = {
    weather: {
      name: null,
      country: null,
      temp: null,
      icon: null,
      description: null,
    },
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
