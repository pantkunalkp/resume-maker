import React, { useContext } from 'react';
import './Refrences.css';
import Title from '../title/Title';
import Line from '../line/Line';
import Refrence from './Refrence';
import { Resume } from '../../App';
const Refrences = () => {
    const { resume } = useContext(Resume);
	return (
		<div id="refrence">
			<Title type="h1" text="Refrences" />
			<Line />
			{
                resume.Refrences.map((refrence) => (
                    <Refrence
                        name={refrence.name}
                        position={refrence.position}
                        company={refrence.company}
                        location={refrence.location}
                        website={refrence.website}
                        email={refrence.email}
                    />
                ))
            }
		</div>
	);
};

export default Refrences;
