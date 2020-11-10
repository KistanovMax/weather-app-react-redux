import React from 'react';
import './ForecastItem.css';

export default function ForecastItem({
  name,
  country,
  temp,
  icon,
  month,
  day,
  hour,
  description,
  clickItem,
  feels,
  tempMax,
  tempMin,
  wind,
  humidity,
  pressure,
  visibility,
}) {
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
      onClick={() =>
        clickItem(
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
        )
      }
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
