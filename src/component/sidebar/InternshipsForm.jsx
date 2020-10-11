import React, { useState, useContext, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Resume } from '../../App';
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add';
import useStyles from './Styles'

const AddInternship = (props) => {
	const classes = useStyles();
	const { resume, setResume } = useContext(Resume);
    const [ internships, setInternships ] = useState({
            "Title": resume.Internships[props.id].Title,
            "Company": resume.Internships[props.id].Company,
            "Start Date": resume.Internships[props.id]['Start Date'],
            "End Date": resume.Internships[props.id]['End Date'],
            "Details": resume.Internships[props.id]['Details']
        }) 
    
    useEffect(() => {
        if(internships.Title !== resume.Internships[props.id].Title)
            setInternships({
                "Title": resume.Internships[props.id].Title,
                "Company": resume.Internships[props.id].Company,
                "Start Date": resume.Internships[props.id]['Start Date'],
                "End Date": resume.Internships[props.id]['End Date'],
                "Details": resume.Internships[props.id]['Details']
            })
    }, [resume, props.id])
	const update = (e) => {
		e.preventDefault();
		const Interns = [ ...resume.Internships ];
		Interns[props.id] = internships
		setResume({
			...resume,
			Internships: [ ...Interns ]
		});
	};
	const deleteInternship = (e) => {
		e.preventDefault();
		setResume({
			...resume,
			Internships: [ ...resume.Internships.filter((internship, index) => index !== props.id) ]
		});
	};
	return (
		<div className={classes.formRoot}>
			<form>
				<TextField
					value={internships["Title"]}
					onChange={(e) => setInternships({...internships, "Title": e.target.value})}
					className={classes.formMargin}
					type="text"
					label="Title"
					fullWidth
				/>
				<TextField
					value={internships["Company"]}
					onChange={(e) => setInternships({...internships, "Company": e.target.value})}
					className={classes.formMargin}
					type="text"
					label="Company"
					fullWidth
				/>
				<TextField
					value={internships["Start Date"]}
					onChange={(e) => setInternships({...internships, "Start Date": e.target.value})}
					className={classes.formMargin}
					type="text"
					label="Start Date"
					fullWidth
				/>
				<TextField
					value={internships["End Date"]}
					onChange={(e) => setInternships({...internships, "End Date": e.target.value})}
					className={classes.formMargin}
					type="text"
					label="End Date"
					fullWidth
				/>
				<TextField
					value={internships["Details"]}
					onChange={(e) => setInternships({...internships, "Details": e.target.value})}
					className={classes.formMargin}
					type="text"
					label="Details"
					fullWidth
				/>
				<div className={classes.buttons}>
					<Button
						variant="contained"
						className={classes.makeCenter}
						color="primary"
						onClick={deleteInternship}
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
	);
};

const InternshipsForm = () => {
    const classes = useStyles()
	const { resume, setResume } = useContext(Resume);

	const addInternship = (e) => {
        e.preventDefault();
        const Intern = [...resume.Internships, {
            "Title": "",
            "Company": "",
            "Start Date": "",
            "End Date": "",
            "Details": ""
        }]
        setResume({
            ...resume,
            Internships: [...Intern]
        })
	};
	return (
		<div>
			
			{resume.Internships.map((internship, index) => <AddInternship key={index} id={index} />)}

            <Button variant="contained"  className={classes.addMore} color="primary" onClick={addInternship}>
				<AddIcon />
			</Button>
		</div>
	);
};

export default InternshipsForm;
