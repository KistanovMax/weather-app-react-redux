export const pressForecastItem = (temp, icon, description) => {
  // console.log(`clicked ${temp} ${icon} ${description}`);
  return {
    type: 'PRESS_FORECAST_ITEM',
    payload: { temp, icon, description },
  };
};
