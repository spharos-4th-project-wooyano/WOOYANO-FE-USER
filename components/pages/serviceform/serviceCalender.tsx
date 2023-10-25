'use client'
import React, { useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './serviceCalenderModule.css';
import moment from 'moment';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

function serviceCalender() {
  const [date, setDate] = useState<Value>(new Date());
  console.log(date);
  
  return (
    <>
      <div className='w-full'>
        <Calendar 
        onChange={setDate}
        formatMonthYear={(locale, date) => moment(date).format('YYYY.MM')}
        value={date} 
        calendarType='gregory'
        formatDay={(locale, date) => moment(date).format('D')}
        />
        
      </div>
      {/* <div className='mt-[40px]'>{date?.toLocaleString()}</div> */}
    </>
  )}

export default serviceCalender