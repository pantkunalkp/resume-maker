import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import './Sidebar.css';
import Typography from '@material-ui/core/Typography';
import IntroductionForm from './IntroductionForm';
import InternshipsForm from './InternshipsForm';
import ProjectsForm from './ProjectsForm';
import EducationForm from './EducationForm'
import SkillsForm from './SkillsForm';
import RefrenceForm from './RefrenceForm'
import useStyles from './Styles';
import Display from './Display';
import MenuItems from './MenuItems';
const Sidebar = () => {
	const classes = useStyles();

	return (
		<Drawer variant="permanent" className="drawer">
			<Typography className={classes.titleHeading}>Live Editor</Typography>
			<hr />
			<div className={classes.root}>
				<MenuItems Tag="display" Name="Display">
					<Display/>
				</MenuItems>
				<MenuItems Tag="introduction" Name="Introduction">
					<IntroductionForm/>
				</MenuItems>
				<MenuItems Tag="internship" Name="Internships">
					<InternshipsForm/>
				</MenuItems>
				<MenuItems Tag="project" Name="Projects">
					<ProjectsForm/>
				</MenuItems>
				<MenuItems Tag="skills" Name="Skills">
					<SkillsForm/>
				</MenuItems>
				<MenuItems Tag="education" Name="Education">
					<EducationForm/>
				</MenuItems>
				<MenuItems Tag="strength" Name="Strengths">
					<Display/>
				</MenuItems>
				<MenuItems Tag="mostproudof" Name="Most Proud Of">
					<Display/>
				</MenuItems>
				<MenuItems Tag="volunteer" Name="Volunteer">
					<Display/>
				</MenuItems>
				<MenuItems Tag="publication" Name="Publications">
					<Display/>
				</MenuItems>
				<MenuItems Tag="certification" Name="Courses & Certifications">
					<Display/>
				</MenuItems>
				<MenuItems Tag="refrence" Name="Refrences">
					<RefrenceForm/>
				</MenuItems>
			</div>
		</Drawer>
	);
};

export default Sidebar;
