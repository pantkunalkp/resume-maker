import React from 'react'
import './Layout.css';
const Container = (props) => {
    return (
        <div className="con">
            {
                props.children
            }
        </div>
    )
}

export default Container
