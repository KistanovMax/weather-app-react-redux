import { combineReducers } from 'redux';
import forecast from './forecast';
import weather from './weather';

const reducers = combineReducers({
  Forecast: forecast,
  Weather: weather,
});

export default reducers;
