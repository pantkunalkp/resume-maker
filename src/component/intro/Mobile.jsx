import React from 'react';
import CallIcon from '@material-ui/icons/Call';

const Mobile = (props) => {
	return (
		<span className="phone">
			<CallIcon color="primary" className="icon"/>
			<a href="#phone">{props.Phone}</a>
		</span>
	);
};

export default Mobile;
