import React, { useContext } from 'react';
import Project from './Project';
import Title from '../title/Title';
import Line from '../line/Line';
import { Resume } from '../../App'
const Projects = () => {
	const { resume } = useContext(Resume)
	return (
		<div id="project">
			<Title type="h1" text="Projects" />
			<Line />
			{
				resume.Projects.map(
					(project, index) => (
						<Project
							title={project.Title}
							startDate={project["Start Date"]}
							endDate={project["End Date"]}
							objective={project["Objective"]}
							description={project["Description"]}
							teamSize = {project["Team Size"]}
							technologies={project["Technologies"]}
							key={index}
						/>
					)
				)
			}
			
		</div>
	);
};

export default Projects;
