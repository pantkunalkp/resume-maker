import React from 'react'
import './Title.css'
const Title = (props) => { 
    if(props.type === "xl")
        return <a href={props.link} target="_blank" rel="noopener noreferrer"><h1 className={`title-xl ${props.colored?'title-color':""}`}>{ props.text }</h1></a>
    if(props.type === 'h1')
        return <a href={props.link} target="_blank" rel="noopener noreferrer"><h1 className={`title-h1 ${props.colored?'title-color':""}`}>{ props.text }</h1></a>
    if(props.type === 'h2')
        return <a href={props.link} target="_blank" rel="noopener noreferrer"><h2 className={`title-h2 ${props.colored?'title-color':""}`}>{ props.text }</h2></a>
    if(props.type === 'h3')
        return <a href={props.link} target="_blank" rel="noopener noreferrer"><h3 className={`title-h3 ${props.colored?'title-color':""}`}>{ props.text }</h3></a> 
    if(props.type === 'h4')
        return <a href={props.link} target="_blank" rel="noopener noreferrer"><h4 className={`title-h4 ${props.colored?'title-color':""}`}>{ props.text }</h4></a>   
}

export default Title
