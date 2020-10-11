import React from 'react'
import Title from '../title/Title';
import Duration from '../duration/Duration';
import InternshipDetails from './InternshipDetails';
const Internship = (props) => {
    return (
        <div className="internship">
            <Title type="h2" text= {props.title} />
            <Title type="h3" text= {props.company} colored link={props.website}/>
            <Duration startDate={props.startDate} endDate={props.endDate} />
            <InternshipDetails details={props.details} />
        </div>
    )
}

export default Internship
