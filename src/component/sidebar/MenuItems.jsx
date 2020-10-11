import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import useStyles from './Styles';
const MenuItems = (props) => {
    const classes = useStyles();
	return (
		<Accordion>
			<a href={`#${props.Tag}`}>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography className={classes.heading}>{props.Name}</Typography>
				</AccordionSummary>
			</a>
			<AccordionDetails>
				{props.children}
			</AccordionDetails>
		</Accordion>
	);
};

export default MenuItems;
