import React, { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import ErrorPlug from '../ErrorPlug/ErrorPlug';
import Loader from '../Loader/Loader';

import './WeatherCard.css';

function WeatherCard() {
  const [showDetails, setShowDetails] = useState(false);
  const {
    weather: {
      name,
      country,
      temp,
      icon,
      description,
      errorMessage,
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

  const toogleShowDetails = useCallback(() => {
    setShowDetails(!showDetails);
  }, [showDetails]);

  if (errorMessage) {
    return <ErrorPlug error={errorMessage} />;
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
                    <div className='temp-block'>
                      <div className='temp'>
                        {Math.round(temp)}
                        <span>&deg;</span>
                      </div>
                      <div className='min-temp'>
                        min
                        <svg
                          width='1.5em'
                          height='1.5em'
                          viewBox='0 0 16 16'
                          className='bi bi-thermometer-half'
                          fill='currentColor'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fillRule='evenodd'
                            d='M6 2a2 2 0 1 1 4 0v7.627a3.5 3.5 0 1 1-4 0V2zm2-1a1 1 0 0 0-1 1v7.901a.5.5 0 0 1-.25.433A2.499 2.499 0 0 0 8 15a2.5 2.5 0 0 0 1.25-4.666.5.5 0 0 1-.25-.433V2a1 1 0 0 0-1-1z'
                          />
                          <path d='M8.25 2a.25.25 0 0 0-.5 0v9.02a1.514 1.514 0 0 1 .5 0V2z' />
                          <path d='M9.5 12.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z' />
                        </svg>
                        {Math.round(tempMin)}
                        <span>&deg;</span>
                      </div>
                      <div className='max-temp'>
                        max
                        <svg
                          width='1.5em'
                          height='1.5em'
                          viewBox='0 0 16 16'
                          className='bi bi-thermometer-half'
                          fill='currentColor'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fillRule='evenodd'
                            d='M6 2a2 2 0 1 1 4 0v7.627a3.5 3.5 0 1 1-4 0V2zm2-1a1 1 0 0 0-1 1v7.901a.5.5 0 0 1-.25.433A2.499 2.499 0 0 0 8 15a2.5 2.5 0 0 0 1.25-4.666.5.5 0 0 1-.25-.433V2a1 1 0 0 0-1-1z'
                          />
                          <path d='M8.25 2a.25.25 0 0 0-.5 0v9.02a1.514 1.514 0 0 1 .5 0V2z' />
                          <path d='M9.5 12.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z' />
                        </svg>
                        {Math.round(tempMax)}
                        <span>&deg;</span>
                      </div>
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
            {showDetails && (
              <div className='details-card'>
                <div className='details-item'>
                  Feels like <span>{Math.round(feels)} </span>
                </div>
                <div className='details-item'>
                   Wind speed <span> {Number(wind).toFixed(1)}</span>
                </div>
                <div className='details-item'>
                  Humidity <span>{humidity}</span>
                </div>
                <div className='details-item'>
                  Pressure <span>{pressure}</span>
                </div>
                <div className='details-item'>
                  Visibility <span>{visibility}</span>
                </div>
              </div>
            )}
            <button
              className='details-button'
              onClick={toogleShowDetails}
            >
              {showDetails ? 'Hide Details' : 'Show Details'}
            </button>
          </div>
        ) : (
          <Loader />
        )}
      </div>
    );
  }
}

export default React.memo(WeatherCard);
