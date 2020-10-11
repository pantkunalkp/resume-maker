import React, { useState, createContext } from 'react';
import './App.css';
import Container from './component/layout/Container';
import ColumnLeft from './component/layout/ColumnLeft';
import ColumnRight from './component/layout/ColumnRight';
import Sidebar from './component/sidebar/Sidebar';
import Introduction from './component/intro/Introduction';
import Internships from './component/internships/Internships';
import Projects from './component/projects/Projects';
import Volunteers from './component/volunteer/Volunteers';
import Publications from './component/publications/Publications';
import Skills from './component/skills/Skills';
import Educations from './component/education/Educations';
import Strength from './component/strengths/Strength';
import MostProudOf from './component/mostproudof/MostProudOf';
import Certification from './component/certification/Certifications';
import Refrences from './component/refrences/Refrences';
import data from './data/Resume.json';

export const Resume = createContext(null);
const App = () => {
	const [ resume, setResume ] = useState(data);
	return (
		<Resume.Provider value = {{resume, setResume}}>
			<div className="app">
				<div className="sidebar">
					<Sidebar />
				</div>
				<div className="cont">
					<Introduction />
					<Container>
						<ColumnLeft>
							<Internships />
							<Projects />
							<Volunteers />
							<Publications />
						</ColumnLeft>
						<ColumnRight>
							<Skills />
							<Educations />
							<Strength />
							<MostProudOf />
							<Certification />
							<Refrences />
						</ColumnRight>
					</Container>
				</div>
			</div>
		</Resume.Provider>
	);
};

export default App;
