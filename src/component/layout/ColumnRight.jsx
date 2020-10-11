import React from 'react'
import './Layout.css';
const ColumnRight = (props) => {
    return (
        <div className="col-right">
            {
                props.children
            }
        </div>
    )
}

export default ColumnRight
