import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './ForecastItem.css';

import { pressForecastItem } from '../../actions/pressForecastItem';

export default function ForecastItem({
  temp,
  icon,
  month,
  day,
  hour,
  description,
}) {
  const weatherSelector = useSelector(
    (state) => state.Weather.weather
  );

  const name = weatherSelector.name;
  const country = weatherSelector.country;

  const dispatch = useDispatch();
  const clickItem = (name, country, temp, icon, description) =>
    dispatch(pressForecastItem(name, country, temp, icon, description));

  const date = new Date();
  const currentDate = `${
    date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
  }.${date.getMonth() + 1}`;
  let forecastDate = `${day}.${month}`;

  if (forecastDate === currentDate) {
    forecastDate = 'Today';
  }

  return (
    <div
      onClick={() => clickItem(name, country, temp, icon, description)}
      className='forecast-item'
    >
      <div className='forecast-item-date'>{forecastDate}</div>
      <div className='forecast-item-time'>
        {hour}
        <sup> 00</sup>
      </div>
      <div className='forecast-item-temperature'>{temp}&deg;</div>
      <img
        className='forecast-item-icon'
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        alt='weather-icon'
      />
    </div>
  );
}
