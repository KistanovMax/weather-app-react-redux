import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ForecastItem from '../ForecastItem/ForecastItem';
import './ForecastCard.css';

import { clickForecastItem } from '../../actions/clickForecastItem';

export default function ForecastCard() {
  const {
    forecast: { errorMessage, name, country, list },
    loading,
    loaded,
  } = useSelector((state) => state.Forecast);

  const dispatch = useDispatch();
  const clickItem = (
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
  ) =>
    dispatch(
      clickForecastItem(
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
    );

  if (errorMessage) {
    return <div className='plug'></div>;
  } else {
    return (
      <div>
        {!loading && loaded ? (
          <div className='forecast-card'>
            {list.map((item) => (
              <ForecastItem
                name={name}
                country={country}
                key={item.dt}
                temp={Math.round(item.main.temp)}
                description={item.weather[0].main}
                icon={item.weather[0].icon}
                feels={item.main.feels_like}
                tempMax={item.main.temp_max}
                tempMin={item.main.temp_min}
                wind={item.wind.speed}
                humidity={item.main.humidity}
                pressure={item.main.pressure}
                visibility={item.visibility}
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
