import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ForecastItem from '../ForecastItem/ForecastItem';
import './ForecastCard.css';

import { pressForecastItem } from '../../actions/pressForecastItem';

export default function ForecastCard() {
  const { error, name, country, list } = useSelector(
    (state) => state.Forecast.forecast
  );

  const dispatch = useDispatch();
  const clickItem = (name, country, temp, icon, description) =>
    dispatch(
      pressForecastItem(name, country, temp, icon, description)
    );

  if (error === 'TypeError') {
    return <div className='forecast-error-400'></div>;
  } else {
    return (
      <div>
        {country ? (
          <div className='forecast-card'>
            {list.map((item) => (
              <ForecastItem
                key={item.dt}
                temp={Math.round(item.main.temp)}
                description={item.weather[0].main}
                icon={item.weather[0].icon}
                month={item.dt_txt.slice(5, 7)}
                day={item.dt_txt.slice(8, 10)}
                hour={item.dt_txt.slice(11, 13) * 1}
                name={name}
                country={country}
                clickItem={clickItem}
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
