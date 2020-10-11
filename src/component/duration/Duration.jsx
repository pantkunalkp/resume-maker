import React from 'react';
import DateRangeIcon from '@material-ui/icons/DateRange';
import './Duration.css'

const Duration = (props) => {
    if(props.endDate) {
        return (
            <p className="duration">
                <DateRangeIcon color="primary" className = "icon"/> {props.startDate} – {props.endDate}
            </p>
        );
    }
    return (
            <p className="duration">
                <DateRangeIcon color="primary" className = "icon" /> {props.startDate}
            </p>
        );
};

export default Duration;
