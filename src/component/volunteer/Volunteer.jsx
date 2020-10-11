import React from 'react';
import Title from '../title/Title';
import Duration from '../duration/Duration';
const Volunteer = (props) => {
	return (
		<div>
			<Title type="h2" text={props.title} />
			<Title type="h3" text={props.company} colored />
			<Duration startDate={props.startDate} endDate={props.endDate} />
			<p className="project-details">
				{props.details}
				<br />
				<strong>Team Size: </strong> {props.teamSize}
			</p>
		</div>
	);
};

export default Volunteer;
