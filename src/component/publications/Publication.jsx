import React from 'react';
import Title from '../title/Title';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import Duration from '../duration/Duration';
import './Publication.css'
const Publication = (props) => {
	return (
		<div>
			<Title
				type="h2"
				text={
					<span>
						<strong>{props.title}</strong>, {props.subTitle}
					</span>
				}
			/>
			<div className="column">
				<p>
					<MenuBookIcon className="icon" /> {props.press}
				</p>
				<Duration startDate={props.publicationDate} />
			</div>
		</div>
	);
};

export default Publication;
