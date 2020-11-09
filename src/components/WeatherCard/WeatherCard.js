import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import ErrorPlug from '../ErrorPlug/ErrorPlug';
import SpinnerItem from '../Loader/Loader';

import './WeatherCard.css';

export default function WeatherCard() {
  const [showInfo, setShowInfo] = useState(false);
  const {
    name,
    country,
    temp,
    icon,
    description,
    error,
  } = useSelector((state) => state.Weather.weather);

  const toogleInfoButton = useCallback(() => {
    setShowInfo((showInfo) => !showInfo);
  }, []);

  if (error) {
    return <ErrorPlug error={error} />;
  } else {
    return (
      <div className='weather-card'>
        {name ? (
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
                  <div className='weather-main'>{description}</div>
                </div>
                <button
                  onClick={toogleInfoButton}
                  className='info-button'
                >
                  {showInfo ? '<' : '>'}
                </button>
              </div>
            </div>
          </div>
        ) : (
          <SpinnerItem />
        )}
      </div>
    );
  }
}
