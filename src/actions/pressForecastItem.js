export const pressForecastItem = (
  name,
  country,
  temp,
  icon,
  description
) => {
  // console.log(`clicked ${name} ${country} ${temp} ${icon} ${description}`);
  return {
    type: 'PRESS_FORECAST_ITEM',
    payload: { name, country, temp, icon, description },
  };
};

// name, country, temp, icon, description
