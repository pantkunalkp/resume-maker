import React from 'react'
import Title from '../title/Title'
import Line from '../line/Line'
import ToolsAndTechnologies from '../skills/ToolsAndTechnologies'
import Tag from '../skills/Tag'
const Strength = () => {
    return (
        <div id="strength">
            <Title type="h1" text="Strength"/>
            <Line />
            <ToolsAndTechnologies>
                <Tag tagName="Teamwork" />
                <Tag tagName="Critical Thinking" />
                <Tag tagName="Problem Solving" />
            </ToolsAndTechnologies>
        </div>
    )
}

export default Strength
