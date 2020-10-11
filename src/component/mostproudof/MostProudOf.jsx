import React from 'react'
import Title from '../title/Title'
import Line from '../line/Line'
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
const MostProudOf = () => {
    return (
        <div id="mostproudof">
            <Title type="h1" text="Most Proud Of" />
            <Line/>
            <p className="project-details"><CardGiftcardIcon className="icon"/>Finalist of <strong>Smart India Hackathon</strong>, 2019</p>
        </div>
    )
}

export default MostProudOf
