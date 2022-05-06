import { Link } from 'react-router-dom'
import './header.css';

const Header = () => {
  return (
    <header className='header'>
      <Link to={'/contact'}>Contact</Link>
      <Link to={'/projects'}>Projects</Link>
      <Link to={'/'}>Home</Link>
    </header>
  );
}

export default Header;