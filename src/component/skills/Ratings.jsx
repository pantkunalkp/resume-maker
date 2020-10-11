import React from 'react'
import './Skills.css'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
const Ratings = (props) => {
    return (
        <span>
            <FiberManualRecordIcon className={`rating ${props.rate >= 1?'rating-active':''}`} />
            <FiberManualRecordIcon className={`rating ${props.rate >= 2?'rating-active':''}`} />
            <FiberManualRecordIcon className={`rating ${props.rate >= 3?'rating-active':''}`} />
            <FiberManualRecordIcon className={`rating ${props.rate >= 4?'rating-active':''}`} />
            <FiberManualRecordIcon className={`rating ${props.rate >= 5?'rating-active':''}`} />
        </span>
    )
}

export default Ratings

