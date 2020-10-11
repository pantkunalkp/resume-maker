import React from 'react';

const ProjectDetails = (props) => {
	return (
		<p className="project-details">
			<strong>Objective:</strong> {props.objective}<br />
			<strong>Description:</strong> {props.description}<br />{' '}
			<strong>Team Size:</strong> {props.teamSize}<br />
			<strong>Technologies:</strong>{ props.technologies}
		</p>
	);
};

export default ProjectDetails;
