import React, { useContext } from 'react';
import Skill from './Skill';
import Title from '../title/Title';
import Line from '../line/Line';
import ToolsAndTechnologies from './ToolsAndTechnologies';
import Tag from './Tag';
import { Resume } from '../../App'
const Skills = () => { 
	const { resume } = useContext(Resume)
	return (
		<div id="skills">
			<Title type="h1" text="Skills" />
			<Line />
			<Title type="h2" text="Languages" />
			<div className="skill-set">
			{
				resume.Skills.Languages.map(
					(skill, index) => <Skill name={skill.Name} level={skill.Level} />
				)
			}
			</div>
			<Title type="h2" text="Tools & Technologies" />
			<ToolsAndTechnologies>
				{
					resume.Skills["Tools & Technologies"].map(
						(tool, index) => <Tag tagName={tool} />
					)
				}
			</ToolsAndTechnologies>
		</div>
	);
};

export default Skills;
