import React from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

export default function CalendarBox() {
    return (
       <div className="calendar">
           <StylingInline />
       </div>
    )
}

const WEEKDAYS_SHORT = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
function StylingInline() {
    const modifiers = {
        date: new Date(),
    }
    const modifiersStyles = {
        date: {
            color: 'black',
            backgroundColor: '#ea9215',
        },
    };
  return (
    <DayPicker
      month={new Date()}
      modifiers={modifiers}
      weekdaysShort={WEEKDAYS_SHORT}
      modifiersStyles={modifiersStyles}
    />
  );
};
