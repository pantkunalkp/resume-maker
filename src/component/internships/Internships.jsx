import React,  { useContext } from 'react';
import './Internships.css';
import Internship from './Internship';
import Title from '../title/Title';
import Line from '../line/Line';
import { Resume } from  '../../App'

const Internships = () => {
	const { resume } = useContext(Resume)
	return (
		<div id="internship">
			<Title type="h1" text="Internships" />
			<Line />
			{
				resume.Internships.map(
					(internship, index) => (
						<Internship
							title={internship.Title}
							company={internship.Company}
							startDate={internship["Start Date"]}
							endDate={internship["End Date"]}
							details={internship.Details}
							key={index}
						/>
					)
				)
			}
			
		</div>
	);
};

export default Internships;
