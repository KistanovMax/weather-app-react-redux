import React from 'react';
import { useSelector } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';
import './WeatherCard.css';

export default function WeatherCard() {
  const { name, country, temp, icon, description } = useSelector(
    (state) => state.Weather.weather
  );

  if (!name) {
    return (
      <div className='error-400'>
        <div className='frown-emoji'>
          <svg
            width='1.5em'
            height='1.5em'
            viewBox='0 0 16 16'
            className='bi bi-emoji-frown'
            fill='currentColor'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z'
            />
            <path
              fillRule='evenodd'
              d='M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683z'
            />
            <path d='M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z' />
          </svg>
        </div>
        Sorry, the specified city was not found..
      </div>
    );
  } else {
    return (
      <div className='weather-card'>
        {name ? (
          <div>
            <div className='city'>
              <svg
                width='0.8em'
                height='0.8em'
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
              </div>
            </div>
          </div>
        ) : (
          <div className='spinner'>
            <Spinner animation='border' variant='light' />{' '}
            <div className='spinner-text'>Loading</div>
            <div className='spinner-text-2'>
              *perhaps you entered an invalid request
            </div>
          </div>
        )}
      </div>
    );
  }
}
