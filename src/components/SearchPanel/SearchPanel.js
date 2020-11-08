import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './SearchPanel.css';

import { fetchWeather } from '../../actions/fetchWeather';
import { fetchForecast } from '../../actions/fetchForecast';

export default function SearchPanel({ city }) {
  // const [city, setCity] = useState('Washington');

  const dispatch = useDispatch();
  const getWeather = (city) => dispatch(fetchWeather(city));
  const getForecast = (city) => dispatch(fetchForecast(city));

  // const pressEnter = useCallback(
  //   (event) => {
  //     if (event.keyCode === 13) {
  //       setCity(event.target.value);
  //     }
  //   },
  //   [setCity]
  // );

  useEffect(() => {
    getWeather(city);
    getForecast(city);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city]);

  return (
    <div>
      {/* <div className='search-panel'>
        <input
          onKeyDown={pressEnter}
          className='search'
          type='text'
          placeholder='Enter city'
        />
        <svg
          width='1.5em'
          height='1.5em'
          viewBox='0 0 16 16'
          className='bi bi-search'
          fill='white'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            d='M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z'
          />
          <path
            fillRule='evenodd'
            d='M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z'
          />
        </svg>
      </div> */}
    </div>
  );
}
