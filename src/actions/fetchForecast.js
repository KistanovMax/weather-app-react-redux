export function fetchForecast(cityName) {
  return function (dispatch) {
    const API = {
      key: '4778a72e106d124b8c8551777889dd53',
      base: 'https://api.openweathermap.org/data/2.5/',
    };
    dispatch({
      type: 'FETCH_FORECAST_REQUEST',
    });
    fetch(
      `${API.base}forecast?q=${cityName}&units=metric&appid=${API.key}`
    )
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        // console.log(result);
        if (result.message) {
          dispatch({
            type: 'FETCH_FORECAST_SUCCESS',
            payload: {
              error: result.message,
            },
          });
        } else {
          dispatch({
            type: 'FETCH_FORECAST_SUCCESS',
            payload: (result = {
              name: result.city.name,
              country: result.city.country,
              list: result.list,
              error: '',
            }),
          });
        }
      });
  };
}
