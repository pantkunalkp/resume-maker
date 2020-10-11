import React from 'react'
import Ratings from './Ratings'
import './Skills.css'
const Skill = (props) => {
    return (
        <div className="skill">
            <p>{props.name}</p>
            <Ratings rate={props.level} />
        </div>
    )
}

export default Skill

