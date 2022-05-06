import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
  return (
    <div id='home' className='home'>
        <h3 className='intro'>Hi, my name is</h3>
        <h1 className='name'>Dato Kevlishvili</h1>
        <p className='developer-p'>Junior full stack developer</p>
        <p className='experience-first'>
          Experience:
        </p>
        <p className='experience-second'>
          Network Engineer at Magticom <span>2017-2022</span>
        </p>
        <p className='skills'>Skills:</p>
        <ul>
          <li>ReactJS</li>
          <li>Javascript ES6</li>
          <li>HTML/CSS</li>
          <li>Bootstrap</li>
          <li>Typescript (basics)</li>
          <li>ExpressJS (basics)</li>
          <li>MongoDB (basics)</li>
        </ul>
        <Link to='/projects' className='see-projects-link'>
          See projects
          <i className="fa-solid fa-arrow-right-long"></i>
        </Link>
        <div className='home-links'>
          <a href='https://github.com/datodat' target='_blank' rel='noopener noreferrer'>
            <span>GitHub</span>
            <i className="fa-brands fa-github-square"></i>
          </a>
          <a href='https://www.linkedin.com/in/dato-kevlishvili-8365131b9/' target='_blank' rel='noopener noreferrer'>
            <span>Linkedin</span>
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href='https://www.facebook.com/dato.kevlishvili.12/' target='_blank' rel='noopener noreferrer'>
            <span>Facebook</span> 
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a href='mailto:dato.kevlishvili.1990@gmail.com' target='_blank' rel='noopener noreferrer'>
            <span>dato.kevlishvili.1990@gmail.com</span>
            <i className="fa-solid fa-envelope"></i>
          </a>
          <a href='tel:598110706' target='_blank' rel='noopener noreferrer'>
            <span>598-11-07-06</span>
            <i className="fa-solid fa-square-phone"></i>
          </a>
        </div>
    </div>
  );
}

export default Home;