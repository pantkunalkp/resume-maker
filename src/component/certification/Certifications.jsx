import React from 'react';
import Title from '../title/Title';
import Line from '../line/Line';
import CardMembershipIcon from '@material-ui/icons/CardMembership';
const Certifications = () => {
	return (
		<div id="certification">
			<Title type="h1" text="Courses & Certifications" />
			<Line />
			<p className="project-details">
				<CardMembershipIcon className="icon" />
                40hrs React Developer course, Udemy
			</p>
            <p className="project-details">
				<CardMembershipIcon className="icon" />
                AWS Specialization, Coursera
			</p>
		</div>
	);
};

export default Certifications;
