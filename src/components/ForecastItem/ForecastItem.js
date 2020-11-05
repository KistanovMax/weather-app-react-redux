import React from 'react';
import { useDispatch } from 'react-redux';
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
  const dispatch = useDispatch();
  const clickItem = (temp, icon, description) =>
    dispatch(pressForecastItem(temp, icon, description));

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
      onClick={() => clickItem(temp, icon, description)}
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