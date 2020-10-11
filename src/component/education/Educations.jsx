import React, { useContext } from 'react'
import Education from './Education'
import Title from '../title/Title'
import Line from '../line/Line'
import { Resume } from  '../../App'

const Educations = () => {
    const { resume } = useContext(Resume)

    return (
        <div id="education">
            <Title type="h1" text = "Education" />
            <Line />
            {
                resume.Education.map(
					(education, index) => (
                        <Education 
                            title={education.Title}
                            university={education.College}
                            cgpa={education["CGPA"]}
                            startDate={education["Start Date"]}
                            endDate={education["End Date"]}
                            key = {index}
                        />
					)
				)
            }
            
        </div> 
    )
}

export default Educations
