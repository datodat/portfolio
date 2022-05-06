import './card.css';

const Card = ({ data }) => {
  return (
    <div className='card'>
      <img src={data.img} alt='project' />
      <p>{data.name}</p>
      <div>
        <a className='live-demo' href={data.live} target='_blank' rel='noopener noreferrer'>
          Live Demo
        </a>
        <a className='project-github-link' href={data.github} target='_blank' rel='noopener noreferrer'>
          Github
        </a>
      </div>
    </div>
  );
}

export default Card;