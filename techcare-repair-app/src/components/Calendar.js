import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

function getCalendarDates(currentDate) {
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
  const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);

  const totalDays = lastDayOfMonth.getDate();
  const firstDayIndex = firstDayOfMonth.getDay() === 0 ? 6 : firstDayOfMonth.getDay() - 1;
  const lastDayIndex = lastDayOfMonth.getDay() === 0 ? 6 : lastDayOfMonth.getDay() - 1;

  const dates = [];

  for (let i = firstDayIndex; i > 0; i--) {
    const prevDate = new Date(currentYear, currentMonth, 0 - i + 1);
    dates.push({
      date: prevDate,
      inactive: true,
      key: `prev-${prevDate.getDate()}`
    });
  }

  for (let i = 1; i <= totalDays; i++) {
    const date = new Date(currentYear, currentMonth, i);
    dates.push({
      date,
      inactive: false,
      key: `curr-${i}`
    });
  }

  for (let i = 1; i <= 6 - lastDayIndex; i++) {
    const nextDate = new Date(currentYear, currentMonth + 1, i);
    dates.push({
      date: nextDate,
      inactive: true,
      key: `next-${i}`
    });
  }

  return dates;
}

const Calendar = ({ selectedDate, setSelectedDate }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const calendarDates = getCalendarDates(currentDate);

  const handleDateClick = (dateObj) => {
    if (dateObj.inactive) return;
    setSelectedDate(dateObj.date);
  };

  const handlePrevMonth = () => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() - 1);
      return newDate;
    });
  };

  const handleNextMonth = () => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + 1);
      return newDate;
    });
  };

  return (
    <div className="calendar">
      <div className="header mb-3">
        <Button variant="light" onClick={handlePrevMonth}>←</Button>
        <div className="monthYear">{currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</div>
        <Button variant="light" onClick={handleNextMonth}>→</Button>
      </div>
      <div className="days">
        {daysOfWeek.map(day => (
          <div className="day" key={day}>{day}</div>
        ))}
      </div>
      <div className="dates">
        {calendarDates.map(({ date, inactive, key }) => {
          const isToday = date.toDateString() === new Date().toDateString();
          const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString() && !inactive;
          return (
            <div
              className={`date${inactive ? ' inactive' : ''}${isToday && !inactive ? ' active' : ''}${isSelected ? ' selected' : ''}`}
              key={key}
              onClick={() => handleDateClick({ date, inactive })}
              style={{ cursor: inactive ? 'default' : 'pointer' }}
            >
              {date.getDate()}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;