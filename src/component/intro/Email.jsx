import React from 'react';
import EmailIcon from '@material-ui/icons/Email';

const Email = (props) => {
	return (
		<span>
			<EmailIcon color="primary" className="icon" />
			<a href={`mailto:${props.mail}`}> {props.mail}</a>
		</span>
	);
};

export default Email;
