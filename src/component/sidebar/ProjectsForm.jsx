import React, { useState, useContext, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Resume } from '../../App';
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add';
import useStyles from './Styles'

const AddProject = (props) => {
	const classes = useStyles();
	const { resume, setResume } = useContext(Resume);
	const { Projects } = resume;
	const [ projects, setProjects ] = useState({
		Title: Projects[props.id].Title,
		'Start Date': Projects[props.id]['Start Date'],
		'End Date': Projects[props.id]['End Date'],
		Objective: Projects[props.id]['Objective'],
		Description: Projects[props.id]['Description'],
		'Team Size': Projects[props.id]['Team Size'],
		Technologies: Projects[props.id]['Technologies']
	});
	useEffect(
		() => {
			if (projects.Title !== Projects[props.id].Title)
				setProjects({
					Title: Projects[props.id].Title,
					'Start Date': Projects[props.id]['Start Date'],
					'End Date': Projects[props.id]['End Date'],
					Objective: Projects[props.id]['Objective'],
					Description: Projects[props.id]['Description'],
					'Team Size': Projects[props.id]['Team Size'],
					Technologies: Projects[props.id]['Technologies']
				});
		},
		[Projects, props.id ]
	);
	const update = (e) => {
		e.preventDefault();
		const Projects = [ ...resume.Projects ];
		Projects[props.id] = projects;
		setResume({
			...resume,
			Projects: [ ...Projects ]
		});
	};
	const deleteProject = (e) => {
		e.preventDefault();
		setResume({
			...resume,
			Projects: [ ...resume.Projects.filter((projects, index) => index !== props.id)]
		});
	};
	return (
		<div className={classes.formRoot}>
			<form>
				<TextField
					value={projects.Title}
					onChange={(e) => setProjects({ ...projects, Title: e.target.value })}
					className={classes.formMargin}
					type="text"
					label="Title"
					fullWidth
				/>
				<TextField
					value={projects['Start Date']}
					onChange={(e) => setProjects({ ...projects, 'Start Date': e.target.value })}
					className={classes.formMargin}
					type="text"
					label="Start Date"
					fullWidth
				/>
				<TextField
					value={projects['End Date']}
					onChange={(e) => setProjects({ ...projects, 'End Date': e.target.value })}
					className={classes.formMargin}
					type="text"
					label="End Date"
					fullWidth
				/>
				<TextField
					value={projects['Objective']}
					onChange={(e) => setProjects({ ...projects, Objective: e.target.value })}
					className={classes.formMargin}
					type="text"
					label="Objective"
					fullWidth
				/>
				<TextField
					value={projects['Description']}
					onChange={(e) => setProjects({ ...projects, Description: e.target.value })}
					className={classes.formMargin}
					type="text"
					label="Description"
					fullWidth
				/>
				<TextField
					value={projects['Team Size']}
					onChange={(e) => setProjects({ ...projects, 'Team Size': e.target.value })}
					className={classes.formMargin}
					type="text"
					label="Team Size"
					fullWidth
				/>
				<TextField
					value={projects['Technologies']}
					onChange={(e) => setProjects({ ...projects, Technologies: e.target.value })}
					className={classes.formMargin}
					type="text"
					label="Technologies"
					fullWidth
				/>
				<div className={classes.buttons}>
					<Button variant="contained" className={classes.makeCenter} color="primary" onClick={deleteProject}>
						<CloseIcon />
					</Button>
					<Button variant="contained" className={classes.makeCenter} color="primary" onClick={update}>
						Update
					</Button>
				</div>
				<hr />
			</form>
		</div>
	);
};

const ProjectsForm = () => {
	const classes = useStyles();
	const { resume, setResume } = useContext(Resume);

	const addProject = (e) => {
		e.preventDefault();
		setResume({
			...resume,
			Projects: [
				...resume.Projects,
				{
					Title: '',
					'Start Date': '',
					'End Date': '',
					Objective: '',
					Description: '',
					'Team Size': '',
					Technologies: ''
				}
			]
		});
	};
	return (
		<div>
			{resume.Projects.map((project, index) => {
                console.log(project.Title)
				return <AddProject id={index} />;
			})}

			<Button variant="contained" className={classes.addMore} color="primary" onClick={addProject}>
				<AddIcon />
			</Button>
		</div>
	);
};

export default ProjectsForm;
