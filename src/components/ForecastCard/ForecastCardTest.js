import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import ForecastItem from '../ForecastItem/ForecastItem';
import './ForecastCard.css';

import {fetchForecast} from '../../actions/fetchForecast'

function ForecastCard({ cityName, forecastData }) {
  const dispatch = useDispatch();
  const getForecast = (cityName) =>
    dispatch(fetchForecast(cityName));

  useEffect(() => {
    getForecast(cityName)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cityName]);

  const { city, list } = forecastData;
  if (forecastData.cod === '400') {
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

export default connect((state) => ({
  forecastData: state.Forecast.forecast,
}))(ForecastCard);
