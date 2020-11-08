export function fetchWeather(cityName) {
  return function (dispatch) {
    const API = {
      key: '4778a72e106d124b8c8551777889dd53',
      base: 'https://api.openweathermap.org/data/2.5/',
    };
    dispatch({
      type: 'FETCH_WEATHER_REQUEST',
    });
    fetch(
      `${API.base}weather?q=${cityName}&units=metric&appid=${API.key}`
    )
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        // console.log(result);
        if (result.message) {
          dispatch({
            type: 'FETCH_WEATHER_SUCCESS',
            payload: {
              error: result.message,
            },
          });
        } else {
          dispatch({
            type: 'FETCH_WEATHER_SUCCESS',
            payload: (result = {
              name: result.name,
              country: result.sys.country,
              temp: result.main.temp,
              icon: result.weather[0].icon,
              description: result.weather[0].main,
              errorMessage: '',
            }),
          });
        }
      });
  };
}
