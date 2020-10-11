import React, { useState, useContext, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Resume } from '../../App';
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add';
import useStyles from './Styles';

const AddRefrence = (props) => {
	const classes = useStyles();
	const { resume, setResume } = useContext(Resume);
	const [ refrence, setRefrence ] = useState({
		name: resume.Refrences[props.id].name,
		position: resume.Refrences[props.id].position,
		company: resume.Refrences[props.id].company,
		location: resume.Refrences[props.id].location,
		website: resume.Refrences[props.id].website,
		email: resume.Refrences[props.id].email
	});
	useEffect(() => {
        if (refrence.name !== resume.Refrences[props.id].name)
            setRefrence({
                name: resume.Refrences[props.id].name,
                position: resume.Refrences[props.id].position,
                company: resume.Refrences[props.id].company,
                location: resume.Refrences[props.id].location,
                website: resume.Refrences[props.id].website,
                email: resume.Refrences[props.id].email
            });
	},[ resume, props.id ])
    const update = (e) => {
        e.preventDefault();
        const Refrence = [ ...resume.Refrences ];
		Refrence[props.id] = refrence
		setResume({
			...resume,
			Refrences: [ ...Refrence ]
		});
    }
    const deleteRefrence = (e) => {
		e.preventDefault();
		setResume({
			...resume,
			Refrences: [ ...resume.Refrences.filter((refrence, index) => index !== props.id) ]
		});
    };
    return (
		<div className={classes.formRoot}>
			<form>
				<TextField
					value={refrence["name"]}
					onChange={(e) => setRefrence({...refrence, "name": e.target.value})}
					className={classes.formMargin}
					type="text"
					label="Title"
					fullWidth
				/>
				<TextField
					value={refrence["company"]}
					onChange={(e) => setRefrence({...refrence, "company": e.target.value})}
					className={classes.formMargin}
					type="text"
					label="Company"
					fullWidth
				/>
				<TextField
					value={refrence["position"]}
					onChange={(e) => setRefrence({...refrence, "position": e.target.value})}
					className={classes.formMargin}
					type="text"
					label="Position"
					fullWidth
				/>
				<TextField
					value={refrence["location"]}
					onChange={(e) => setRefrence({...refrence, "location": e.target.value})}
					className={classes.formMargin}
					type="text"
					label="Location"
					fullWidth
				/>
                <TextField
					value={refrence["website"]}
					onChange={(e) => setRefrence({...refrence, "website": e.target.value})}
					className={classes.formMargin}
					type="text"
					label="Website"
					fullWidth
				/>
                <TextField
					value={refrence["email"]}
					onChange={(e) => setRefrence({...refrence, "email": e.target.value})}
					className={classes.formMargin}
					type="email"
					label="Email"
					fullWidth
				/>
				<div className={classes.buttons}>
					<Button
						variant="contained"
						className={classes.makeCenter}
						color="primary"
						onClick={deleteRefrence}
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
const RefrenceForm = () => {
    const classes = useStyles()
	const { resume, setResume } = useContext(Resume);
	const addRefrence = (e) => {
        e.preventDefault();
        const Refrence = [...resume.Refrences, {
            "name": "",
			"position": "",
			"company": "",
			"location": "",
			"website": "",
			"email": ""
        }]
        setResume({
            ...resume,
            Refrences: [...Refrence]
        })
	};
	return <div>
        {resume.Refrences.map((refrence, index) => <AddRefrence key={index} id={index} />)}

            <Button variant="contained"  className={classes.addMore} color="primary" onClick={addRefrence}>
				<AddIcon />
			</Button>
    </div>;
};

export default RefrenceForm;
