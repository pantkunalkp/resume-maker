import React, {  useState, useContext, useEffect } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Resume } from '../../App';
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add';
import useStyles from './Styles';

const AddStrength = (props) => {
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

const StrengthsForm = () => {
    return (
        <div>
            
        </div>
    )
}

export default StrengthsForm
