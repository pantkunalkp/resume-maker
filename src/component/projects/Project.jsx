import React from 'react';
import Title from '../title/Title';
import Duration from '../duration/Duration';
import ProjectDetails from './ProjectDetails';
const Project = (props) => {
	return (
		<div>
			<Title type="h2" text={props.title} />
			<Duration startDate={props.startDate} endDate={props.endDate} />
			<ProjectDetails
				objective={props.objective}
				description={props.description}
				teamSize={props.teamSize}
				technologies={props.technologies}
			/>
		</div>
	);
};

export default Project;
