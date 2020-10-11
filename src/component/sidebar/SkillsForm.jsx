import React, { useState, useContext, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Resume } from '../../App';
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add';
import Slider from '@material-ui/core/Slider';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import useStyles from './Styles';

const AddSkill = (props) => {
	const classes = useStyles();
	const { resume, setResume } = useContext(Resume);
	const [ skills, setSkills ] = useState({
		Name: resume.Skills.Languages[props.id].Name,
		Level: resume.Skills.Languages[props.id].Level
	});
	useEffect(
		() => {
			if (skills.Name !== resume.Skills.Languages[props.id].Name)
				setSkills({
					Name: resume.Skills.Languages[props.id].Name,
					Level: resume.Skills.Languages[props.id].Level
				});
		},
		[ resume, props.id ]
	);
	const update = (e) => {
		e.preventDefault();
		const Skills = [ ...resume.Skills.Languages ];
		Skills[props.id] = skills;
		setResume({
			...resume,
			Skills: {
				...resume.Skills,
				Languages: [ ...Skills ]
			}
		});
	};
	const deleteSkill = (e) => {
		e.preventDefault();
		setResume({
			...resume,
			Skills: {
				...resume.Skills,
				Languages: [ ...resume.Skills.Languages.filter((lang, index) => index !== props.id) ]
			}
		});
	};
	return (
		<div className={classes.formRoot}>
			<form>
				<TextField
					value={skills.Name}
					onChange={(e) => setSkills({ ...skills, Name: e.target.value })}
					className={classes.formMargin}
					type="text"
					label="Name"
					fullWidth
				/>
				<Slider
					defaultValue={skills.Level}
					getAriaValueText={(value) => value}
					aria-labelledby="discrete-slider"
					valueLabelDisplay="auto"
					step={1}
					min={0}
					max={5}
					onChange={(e, value) => setSkills({ ...skills, Level: value })}
				/>
				<div className={classes.buttons}>
					<Button variant="contained" className={classes.makeCenter} color="primary" onClick={deleteSkill}>
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

const AddTools = (props) => {
	const classes = useStyles();
	const { resume, setResume } = useContext(Resume);
	const [ tool, setTool ] = useState(resume.Skills['Tools & Technologies'][props.id]);
	useEffect(
		() => {
			if (tool !== resume.Skills['Tools & Technologies'][props.id])
				setTool(resume.Skills['Tools & Technologies'][props.id]);
		},
		[ resume, props.id ]
	);
	const update = (e) => {
		e.preventDefault();
		const Tools = [ ...resume.Skills['Tools & Technologies'] ];
		Tools[props.id] = tool;
		setResume({
			...resume,
			Skills: {
				...resume.Skills,
				'Tools & Technologies': [ ...Tools ]
			}
		});
	};
	const deleteTool = (e) => {
		e.preventDefault();
		setResume({
			...resume,
			Skills: {
				...resume.Skills,
				'Tools & Technologies': [
					...resume.Skills['Tools & Technologies'].filter((skill, index) => index !== props.id)
				]
			}
		});
	};
	return (
		<div className={classes.formRoot}>
			<form>
				<TextField
					value={tool}
					onChange={(e) => setTool(e.target.value)}
					className={classes.formMargin}
					type="text"
					label="Name"
					fullWidth
				/>
				<div className={classes.buttons}>
					<Button variant="contained" className={classes.makeCenter} color="primary" onClick={deleteTool}>
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

const SkillsForm = () => {
	const classes = useStyles();
	const { resume, setResume } = useContext(Resume);

	const addSkill = (e) => {
		e.preventDefault();
		setResume({
			...resume,
			Skills: {
				...resume.Skills,
				Languages: [ ...resume.Skills.Languages, { Name: '', Level: 0 } ]
			}
		});
	};
	const addTool = (e) => {
		e.preventDefault();
		setResume({
			...resume,
			Skills: {
				...resume.Skills,
				'Tools & Technologies': [ ...resume.Skills['Tools & Technologies'], '' ]
			}
		});
	};

	return (
		<div style={{width: "100%"}}>
			<Accordion>
				<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
					<Typography className={classes.heading}>Languages</Typography>
				</AccordionSummary>
				<AccordionDetails className={classes.flexCol}>
					{resume.Skills.Languages.map((lang, index) => {
						return <AddSkill id={index} />;
					})}

					<Button variant="contained" className={classes.addMore} color="primary" onClick={addSkill}>
						<AddIcon />
					</Button>
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
					<Typography className={classes.heading}>Tools & Technologies</Typography>
				</AccordionSummary>
				<AccordionDetails className={classes.flexCol}>
					{resume.Skills['Tools & Technologies'].map((tool, index) => {
						return <AddTools id={index} />;
					})}

					<Button variant="contained" className={classes.addMore} color="primary" onClick={addTool}>
						<AddIcon />
					</Button>
				</AccordionDetails>
			</Accordion>
		</div>
	);
};

export default SkillsForm;
