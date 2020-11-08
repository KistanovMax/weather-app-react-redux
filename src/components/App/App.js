import React from 'react';
import SearchPanel from '../SearchPanel/SearchPanel';
import WeatherCard from '../WeatherCard/WeatherCard';
import ForecastCard from '../ForecastCard/ForecastCard';
import DateCard from '../DataCard/DateCard';
import './App.css';
import Header from '../Header/Header';

export default function App() {
  return (
    <div className='container'>
      <div className='header-date'>
        <Header />
        <DateCard />
      </div>
      <SearchPanel />
      <WeatherCard />
      <ForecastCard />
    </div>
  );
}
