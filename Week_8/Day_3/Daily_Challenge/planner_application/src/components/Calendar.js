import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { selectDay } from '../features/tasks/tasksSlice';

const PlannerCalendar = () => {
    const selectedDay = useSelector((state) => state.tasks.selectedDay);
    const dispatch = useDispatch();

    const handleDateChange = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const formattedDate = `${year}-${month}-${day}`;
        dispatch(selectDay({ day: formattedDate }));
    };

    return (
        <div>
            <h2>Select a Day</h2>
            <Calendar
                onChange={handleDateChange}
                value={selectedDay ? new Date(selectedDay) : new Date()}
            />
        </div>
    );
};

export default PlannerCalendar;