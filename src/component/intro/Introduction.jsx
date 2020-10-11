import React, {useContext} from 'react';
import './Intro.css';
import Title from '../title/Title';
import Email from './Email';
import Address from './Address';
import Mobile from './Mobile';
import Linkedin from './Linkedin';
import Github from './Github';
import { Resume } from '../../App';
const Introduction = () => {
	const { resume } = useContext(Resume)
	const { Introduction } = resume
	return (
		<div className="intro-part" id="introduction">
			<Title type="xl" text={Introduction.Name}/>
			<Title type="h2" text={Introduction["Job Title"]} colored />
			<div className="internal-details">
				<Email mail={Introduction.Email} />
				<Address Address={Introduction.Address}/>
			</div>
			<div className="internal-details">
				<Mobile Phone={Introduction["Mobile No"]} />
				<Linkedin userName={Introduction.Linkedin} />
				<Github userName={Introduction.Github} />
			</div>
		</div>
	);
};

export default Introduction;
