import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
const Linkedin = (props) => {
	return (
		<span className="linkedIn">
			<LinkedInIcon color="primary"  className="icon" />
			<a href={`https://www.linkedin.com/in/${props.userName}`} target="_blank" rel="noopener noreferrer">{props.userName}</a>
		</span>
	);
};

export default Linkedin;
