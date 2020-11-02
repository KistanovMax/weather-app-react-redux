export function fetchForecast(cityName) {
  //return the actual action to do
  return function (dispatch) {
    const API = {
      key: '4778a72e106d124b8c8551777889dd53',
      base: 'https://api.openweathermap.org/data/2.5/',
    };

    fetch(
      `${API.base}forecast?q=${cityName}&units=metric&appid=${API.key}`
    )
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        // console.log(result);
        dispatch({
          type: 'FETCH_FORECAST',
          payload: result,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
