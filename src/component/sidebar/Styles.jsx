import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '300px'
	},
	titleHeading: {
		marginTop: 20,
		fontSize: theme.typography.pxToRem(30),
		textAlign: 'center'
	},
	heading: {
		fontSize: theme.typography.pxToRem(20),
		fontWeight: theme.typography.fontWeightRegular
	},
	formMargin: {
		marginBottom: 15
    },
    formRoot: {
		padding: 20
	},
	makeCenter:{
		marginLeft: '20px',
		marginRight: 'auto',
		textAlign: 'center'
	},
	buttons: {
		display: 'flex'
	},
	addMore: {
		margin: '10px',
		marginLeft: '90px'
    },
    flexCol: {
        flexDirection: "column"
    }
}));

export default useStyles