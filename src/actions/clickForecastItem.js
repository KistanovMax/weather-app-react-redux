export const clickForecastItem = (
  name,
  country,
  temp,
  icon,
  description,
  feels,
  tempMax,
  tempMin,
  wind,
  humidity,
  pressure,
  visibility
) => {
  return {
    type: 'CLICK_FORECAST_ITEM',
    payload: {
      name,
      country,
      temp,
      icon,
      description,
      feels,
      tempMax,
      tempMin,
      wind,
      humidity,
      pressure,
      visibility,
    },
  };
};
