import React from 'react';
import WeatherCard from '../WeatherCard/WeatherCard';
import ForecastCard from '../ForecastCard/ForecastCard';
import DateCard from '../DataCard/DateCard';
import CitiesSearch from '../AutoSuggest/CitiesSearch';
import './App.css';

export default function App() {
  return (
    <div className='container'>
      <CitiesSearch />
      <WeatherCard />
      <ForecastCard />
      <DateCard />
    </div>
  );
}