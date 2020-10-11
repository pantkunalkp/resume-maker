import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';

const Github = (props) => {
	return (
		<span className="github">
			<GitHubIcon color="primary" className="icon"/>
			<a href={`https://www.linkedin.com/in/${props.userName}`} target="_blank" rel="noopener noreferrer">{props.userName}</a>
		</span>
	);
};

export default Github;
