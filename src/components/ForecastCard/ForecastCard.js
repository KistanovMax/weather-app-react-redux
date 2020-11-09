import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ForecastItem from '../ForecastItem/ForecastItem';
import './ForecastCard.css';

import { clickForecastItem } from '../../actions/clickForecastItem';

export default function ForecastCard() {
  const { error, name, country, list } = useSelector(
    (state) => state.Forecast.forecast
  );

  const dispatch = useDispatch();
  const clickItem = (name, country, temp, icon, description) =>
    dispatch(
      clickForecastItem(name, country, temp, icon, description)
    );

  if (error) {
    return <div className='plug'></div>;
  } else {
    return (
      <div>
        {name ? (
          <div className='forecast-card'>
            {list.map((item) => (
              <ForecastItem
                name={name}
                country={country}
                key={item.dt}
                temp={Math.round(item.main.temp)}
                description={item.weather[0].main}
                icon={item.weather[0].icon}
                month={item.dt_txt.slice(5, 7)}
                day={item.dt_txt.slice(8, 10)}
                hour={item.dt_txt.slice(11, 13) * 1}
                clickItem={clickItem}
              />
            ))}
          </div>
        ) : (
          <div className='plug'></div>
        )}
      </div>
    );
  }
}
