import { combineReducers } from 'redux';
import forecastReducer from './forecastReducer';
import weatherReducer from './weatherReducer';

const reducers = combineReducers({
  Forecast: forecastReducer,
  Weather: weatherReducer,
});

export default reducers;
