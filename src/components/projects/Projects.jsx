import './projects.css';
import Card from '../card/Card';
import { projectsArray } from '../../data';

const Projects = () => {
  return (
    <div className="projects">
      <h3>Projects</h3>
      <div id='projects' className='projects-wrapper'>
        {projectsArray && projectsArray.map(i => {
          return (
            <Card key={i.name} data={i} />
          )
        })}
      </div>
    </div>
  );
}

export default Projects;