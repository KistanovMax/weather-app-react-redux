const fetchForecast = (
  state = { forecast: {} },
  action
) => {
  switch (action.type) {
    case 'FETCH_FORECAST':
      return (state = {
        ...state,
        forecast: action.payload,
      });

    default:
      return state;
  }
};

export default fetchForecast;
