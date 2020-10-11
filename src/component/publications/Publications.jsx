import React from 'react'
import Publication from './Publication'
import Title from '../title/Title'
import Line from '../line/Line'
const Publications = () => {
    return (
        <div id="publication">
            <Title type="h1" text="Publications"/>
            <Line />
            <Publication
                title="Submitted Book Chapter"
                subTitle="Machine Learning Algorithms for Healthcare Data Analytics"
                press="CRC Press"
                publicationDate="May 2020"
            />
        </div>
    )
}

export default Publications
