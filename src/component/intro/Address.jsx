import React from 'react';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const Address = (props) => {
	return (
		<span className="location">
			<LocationOnIcon color="primary"  className="icon" />
				{props.Address}
		</span>
	);
};

export default Address;
