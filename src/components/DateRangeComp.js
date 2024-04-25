import React, {useState} from 'react'
import { DateRange } from 'react-date-range'
import '../Styles/DateRangeComp.css'

import format from 'date-fns/format'
import { addDays } from 'date-fns'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'


const DateRangeComp = (props) => {
    const [range, setRange] = useState([
        {
            startDate:new Date(),
            endDate: addDays(new Date(),7),
            key:'selection'
        }
    ])

    const [open, setOpen] = useState(false)
    const handleSelect = (range) => {
        setRange([range.selection])
        console.log([range.selection])
        props.onDateChange([range.selection.startDate, range.selection.endDate])
    }
  return (
    <div className='calenderWrap'>
        <input 
            value={`${format(range[0].startDate, "MM/dd/yyyy")} to ${format(range[0].endDate, "MM/dd/yyyy")}`}
            readOnly
            className='inputBox'
            onClick={() => setOpen(open => !open)}
        />

        <div>
            {
                open && 
                <DateRange
                    onChange={handleSelect}
                    editableDateInputs={true}
                    moveRangeOnFirstSelection={false}
                    ranges={range}
                    months={1}
                    direction='horizontal'
                    className='calendarElement'
                
                />
            }
        </div>
    </div>
  )
}

export default DateRangeComp