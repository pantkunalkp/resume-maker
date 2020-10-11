import React from 'react';
import './Refrences.css';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
const About = (props) => {
	return (
		<p>
			<AccountBalanceIcon className="icon" /> {props.position},
			<a href={props.website} target="_blank" rel="noopener noreferrer" className="color">
				<strong> {props.company}, </strong>
			</a>{props.location}
		</p>
	);
};

export default About;
