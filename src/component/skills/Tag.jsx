import React from 'react'
import './Skills.css'
const Tag = (props) => {
    return (
        <button className='tag'>
            {props.tagName}
        </button>
    )
}
 
export default Tag
