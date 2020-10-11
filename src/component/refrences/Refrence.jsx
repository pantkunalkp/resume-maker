import React from 'react';
import Title from '../title/Title';
import About from './About';
import Email from '../intro/Email';
import './Refrences.css';

const Refrence = (props) => {
	return (
		<div className="refrence">
			<Title type="h2" text={props.name} />
			<div className="about">
				<About
					position={props.position}
					company={props.company}
					location={props.location}
					website={props.website}
				/>
				<Email mail={props.email} />
			</div>
		</div>
	);
};

export default Refrence;
