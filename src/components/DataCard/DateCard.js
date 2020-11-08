import React from 'react';
import './DateCard.css';

export default function DateCard() {
  const monthArr = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const weekDayArr = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const date = new Date();
  const currentDate = `${date.getDate()} ${
    monthArr[date.getMonth()]
  } ${date.getFullYear()}`;
  const currentWeekDay = weekDayArr[date.getDay()];

  return (
    <div className='date-card'>
      <div className='date-group'>
        <div className='week-day'>{currentWeekDay}</div>
        <div className='date'>{currentDate}</div>
      </div>
    </div>
  );
}
