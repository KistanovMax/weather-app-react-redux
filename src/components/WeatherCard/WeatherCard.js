import React from 'react';
import { useSelector } from 'react-redux';
import ErrorPlug from '../ErrorPlug/ErrorPlug';
import Loader from '../Loader/Loader';

import './WeatherCard.css';

export default function WeatherCard() {
  const {
    weather: {
      name,
      country,
      temp,
      icon,
      description,
      error,
      feels,
      tempMax,
      tempMin,
      wind,
      humidity,
      pressure,
      visibility,
    },
    loading,
    loaded,
  } = useSelector((state) => state.Weather);

  if (error) {
    return <ErrorPlug error={error} />;
  } else {
    return (
      <div>
        {!loading && loaded ? (
          <div className='weather-details'>
            <div className='weather-card'>
              <div>
                <div className='city'>
                  <svg
                    width='1em'
                    height='1em'
                    viewBox='0 0 16 16'
                    className='bi bi-geo-alt-fill'
                    fill='currentColor'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'
                    />
                  </svg>
                  {name} <sup>{country}</sup>
                </div>
                <div>
                  <div className='weather'>
                    <div className='temperature'>
                      {Math.round(temp)}
                      <span>&deg;</span>
                    </div>
                    <div className='weather-type'>
                      <img
                        className='weather-icon'
                        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                        alt='weather-icon'
                      />
                      <div className='weather-main'>
                        {description}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='details-card'>
              <div>Feels like {feels}</div>
              <div>
                Min temp {tempMin}
                Max temp {tempMax}
              </div>
              <div>Wind {wind}</div>
              <div>Humidity {humidity}</div>
              <div>Pressure {pressure}</div>
              <div>Visibility {visibility}</div>
            </div>
          </div>
        ) : (
          <Loader />
        )}
      </div>
    );
  }
}
