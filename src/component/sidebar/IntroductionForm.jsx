import React, { useState, useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Resume } from '../../App';
const useStyles = makeStyles((theme) => ({
	formMargin: {
		marginBottom: 15
	},
	makeCenter: {
		marginLeft: '90px',
		marginRight: 'auto',
		textAlign: 'center'
	}
}));

const IntroductionForm = () => {
	const classes = useStyles();
	const { resume, setResume } = useContext(Resume);
	const [ name, setName ] = useState(resume.Introduction["Name"]);
	const [ email, setEmail ] = useState(resume.Introduction["Email"]);
	const [ tagLine, setTagLine ] = useState(resume.Introduction["Job Title"]);
	const [ mobile, setMobile ] = useState(resume.Introduction["Mobile No"]);
	const [ address, setAddress ] = useState(resume.Introduction["Address"]);
	const [ github, setGithub ] = useState(resume.Introduction["Github"]);
	const [ linkedIn, setLinkedIn ] = useState(resume.Introduction["Linkedin"]);

	const update = (e) => {
		e.preventDefault();
		setResume({
			...resume,
			Introduction: {
				Name: name,
				'Job Title': tagLine,
				Email: email,
				Address: address,
				'Mobile No': mobile,
				Linkedin: linkedIn,
				Github: github
			}
		});
	};
	return (
		<form>
			<TextField
				value = {name}
				onChange={(e) => setName(e.target.value)}
				className={classes.formMargin}
				type="text"
				label="Name"
				fullWidth
			/>
			<TextField
				value = {tagLine}
				onChange={(e) => setTagLine(e.target.value)}
				className={classes.formMargin}
				type="text"
				label="Tag Line"
				fullWidth
			/>
			<TextField
				value = {email}
				onChange={(e) => setEmail(e.target.value)}
				className={classes.formMargin}
				type="email"
				label="Email"
				fullWidth
			/>
			<TextField
				value = {mobile}
				onChange={(e) => setMobile(e.target.value)}
				className={classes.formMargin}
				type="number"
				label="Mobile No."
				fullWidth
			/>
			<TextField
				value = {address}
				onChange={(e) => setAddress(e.target.value)}
				className={classes.formMargin}
				label="Address"
				fullWidth
			/>
			<TextField
				value = {github}
				onChange={(e) => setGithub(e.target.value)}
				className={classes.formMargin}
				label="Github"
				fullWidth
			/>
			<TextField
				value = {linkedIn}
				onChange={(e) => setLinkedIn(e.target.value)}
				className={classes.formMargin}
				label="LinkedIn"
				fullWidth
			/>
			<Button variant="contained" className={classes.makeCenter} color="primary" onClick={update}>
				Update
			</Button>
		</form>
	);
};

export default IntroductionForm;
