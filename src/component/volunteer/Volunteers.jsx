import React from 'react'
import Title from '../title/Title'
import Line from '../line/Line'
import Volunteer from './Volunteer'
const Volunteers = () => {
    return (
        <div id="volunteer">
            <Title type="h1" text = "Volunteer" />
            <Line />
            <Volunteer 
                title="LDExplained.com"
                company="Lens Foundation"
                startDate="May 2020"
                endDate="June 2020"
                details="Developed an online blog website for Lens foundation for providing information about Learning Disabilities using WordPress."
                teamSize="2"
            />
        </div>
    )
}

export default Volunteers
