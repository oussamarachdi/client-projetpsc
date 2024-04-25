import React, { useState } from 'react'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

import { DateRangePicker } from 'react-date-range'

const MyDateRangePicker = (props) => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1); 
    const [startDate, setStartDate] = useState(yesterday);
    const [endDate, setEndDate] = useState(yesterday);

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
        props.onDateChange([startDate, endDate])
    }

    const selectionRange = {
        startDate : startDate,
        endDate : endDate,
        key : 'selection',
    }
  return (
    <DateRangePicker 
        ranges={[selectionRange]}
        onChange={handleSelect}
    />
  )
}

export default MyDateRangePicker