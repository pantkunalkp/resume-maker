import React from 'react'
import Title from '../title/Title'
import Duration from '../duration/Duration'
import SchoolIcon from '@material-ui/icons/School';
const Education = (props) => {
    return (
        <div>
            <Title type="h2" text={props.title} />
            <p className="project-details"><SchoolIcon className="icon" /><strong className="color">{props.university},</strong> {props.cgpa?`${props.cgpa} CGPA`:''}</p>
            <Duration startDate={props.startDate} endDate={props.endDate} />
        </div>
    )
}

export default Education
