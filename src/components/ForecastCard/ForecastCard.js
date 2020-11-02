import React from 'react';
import { useSelector } from 'react-redux';
import ForecastItem from '../ForecastItem/ForecastItem';
import './ForecastCard.css';

export default function ForecastCard({ cityName }) {
  const forecastSelector = useSelector(
    (state) => state.Forecast.forecast
  );

  const { city, list } = forecastSelector;
  if (forecastSelector.cod === '400') {
    return <div className='forecast-error-400'></div>;
  } else {
    return (
      <div>
        {city ? (
          <div className='forecast-card'>
            {list.map((item) => (
              <ForecastItem
                key={item.dt}
                temp={Math.round(item.main.temp)}
                icon={item.weather[0].icon}
                month={item.dt_txt.slice(5, 7)}
                day={item.dt_txt.slice(8, 10)}
                hour={item.dt_txt.slice(11, 13) * 1}
              />
            ))}
          </div>
        ) : (
          <div className='forecast-spinner'></div>
        )}
      </div>
    );
  }
}
