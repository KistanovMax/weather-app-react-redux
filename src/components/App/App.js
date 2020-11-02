import React from 'react';
import SearchPanel from '../SearchPanel/SearchPanel';
import WeatherCard from '../WeatherCard/WeatherCard';
import ForecastCard from '../ForecastCard/ForecastCard';
import DateCard from '../DataCard/DateCard';
import './App.css';

export default function App() {
  return (
    <div className='container night'>
      <SearchPanel />
      <WeatherCard />
      <ForecastCard />
      <DateCard />
    </div>
  );
}

// container
// container night
