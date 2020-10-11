import React from 'react'
import { TwitterPicker, CirclePicker  } from 'react-color';
import Typography from '@material-ui/core/Typography';
import useStyles from './Styles'
import Slider from '@material-ui/core/Slider';

const Display = () => {
    const classes = useStyles()
    const changeTheme = (color, event) => {
		document.documentElement.style.setProperty('--main-color',color.hex)
    }
    const changeFont = (e, value) => {
        document.documentElement.style.setProperty('font-size',`${value}px`)
    }
    return (
        <div>
            <Typography className={classes.heading}>Primary Color</Typography>
            {/* <TwitterPicker onChange={ changeTheme }  /> */}
            <CirclePicker className={classes.formRoot} onChange={ changeTheme } />
            <Typography className={classes.heading}>Font Size</Typography>
            <Slider
					defaultValue={15}
					valueLabelDisplay="auto"
					step={1}
					min={5}
					max={25}
					onChange={changeFont}
				/>
        </div>
    )
}

export default Display
