import React from 'react'
import './Layout.css';
const ColumnLeft = (props) => {
    return (
        <div className="col-left">
            { 
                props.children
            }
        </div>
    )
}

export default ColumnLeft
