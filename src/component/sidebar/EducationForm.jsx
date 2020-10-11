import React, {  useState, useContext, useEffect } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Resume } from '../../App';
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add';
import useStyles from './Styles';


const AddEducation = (props) => {
    const classes = useStyles();
    const { resume, setResume } = useContext(Resume);
    const [ education, setEducation ] = useState({
            Title: resume.Education[props.id].Title,
            College: resume.Education[props.id].College,
            CGPA: resume.Education[props.id].CGPA,
			"Start Date": resume.Education[props.id]["Start Date"],
			"End Date": resume.Education[props.id]["End Date"] 
        }) 
    
    useEffect(() => {
        if(resume.Title !== resume.Education[props.id].Title)
            setEducation({
                Title: resume.Education[props.id].Title,
                College: resume.Education[props.id].College,
                CGPA: resume.Education[props.id].CGPA,
			    "Start Date": resume.Education[props.id]["Start Date"],
			    "End Date": resume.Education[props.id]["End Date"] 
            })
    }, [resume, props.id])
    console.log(education)
    const update = (e) => {
		e.preventDefault();
		const Edu = [ ...resume.Education ];
		Edu[props.id] = education
		setResume({
			...resume,
			Education: [ ...Edu ]
		});
	};
	const deleteEdu = (e) => {
		e.preventDefault();
		setResume({
			...resume,
			Education: [ ...resume.Education.filter((edu, index) => index !== props.id) ]
		});
    };
    
    return (
        <div className={classes.formRoot}>
			<form>
				<TextField
					value={education["Title"]}
					onChange={(e) => setEducation({...education, Title: e.target.value})}
					className={classes.formMargin}
					type="text"
					label="Title"
					fullWidth
				/>
				<TextField
					value={education["College"]}
					onChange={(e) => setEducation({...education, College: e.target.value})}
					className={classes.formMargin}
					type="text"
					label="College"
					fullWidth
				/>
				<TextField
					value={education["Start Date"]}
					onChange={(e) => setEducation({...education, "Start Date": e.target.value})}
					className={classes.formMargin}
					type="text"
					label="Start Date"
					fullWidth
				/>
				<TextField
					value={education["End Date"]}
					onChange={(e) => setEducation({...education, "End Date": e.target.value})}
					className={classes.formMargin}
					type="text"
					label="End Date"
					fullWidth
				/>
				<TextField
					value={education["CGPA"]}
					onChange={(e) => setEducation({...education, CGPA: e.target.value})}
					className={classes.formMargin}
					type="text"
					label="CGPA"
					fullWidth
				/>
				<div className={classes.buttons}>
					<Button
						variant="contained"
						className={classes.makeCenter}
						color="primary"
						onClick={deleteEdu}
					>
						<CloseIcon />
					</Button>
					<Button variant="contained" className={classes.makeCenter} color="primary" onClick={update}>
						Update
					</Button>
				</div>
                <hr/>
			</form>
		</div>
    )
}
const EducationForm = () => {
    const classes = useStyles()
	const { resume, setResume } = useContext(Resume);

	const addEducation = (e) => {
        e.preventDefault();
        const Edu = [...resume.Education, {
            "Title": "",
            "College": "",
            "CGPA": "",
            "Start Date": "",
            "End Date": ""
        }]
        setResume({
            ...resume,
            Education: [...Edu]
        })
	};
	return (
		<div>
			
			{resume.Education.map((education, index) => <AddEducation key={index} id={index} />)}

            <Button variant="contained"  className={classes.addMore} color="primary" onClick={addEducation}>
				<AddIcon />
			</Button>
		</div>
	);
}

export default EducationForm
