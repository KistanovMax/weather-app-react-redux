export function fetchWeather(cityName) {
  return function (dispatch) {
    const API = {
      key: '4778a72e106d124b8c8551777889dd53',
      base: 'https://api.openweathermap.org/data/2.5/',
    };

    fetch(
      `${API.base}weather?q=${cityName}&units=metric&appid=${API.key}`
    )
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        // console.log(result);
        dispatch({
          type: 'FETCH_WEATHER',
          payload: (result = {
            cod: result.cod,
            name: result.name,
            country: result.sys.country,
            temp: result.main.temp,
            icon: result.weather[0].icon,
            description: result.weather[0].main,
          }),
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
