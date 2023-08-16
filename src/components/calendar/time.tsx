import React, { useState } from 'react';
import DateTime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';

interface Props {
  initialDate?: Date;
}

const Calendar: React.FC<Props> = ({ initialDate = new Date() }) => {
  const [selectedDate, setSelectedDate] = useState(initialDate);

  const handleDateChange = (date: Date | string) => {
    if (date instanceof Date && !isNaN(date.getTime())) {
      setSelectedDate(date);
    }
  };

  return (
    <DateTime
      value={selectedDate}
    //   onChange={handleDateChange}
      timeFormat={false}
      inputProps={{ placeholder: 'Select Date', readOnly: true }}
    />
  );
};

export default Calendar;
