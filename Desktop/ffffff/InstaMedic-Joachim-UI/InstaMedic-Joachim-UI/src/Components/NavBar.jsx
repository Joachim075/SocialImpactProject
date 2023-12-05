import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <>
      <div id="nav-bar" className="flex justify-between items-center p-4 bg-gray-100">

        <div id="nav-logo" className="flex items-center">
          <Link to='/'><img src=".\public\Pictures\logo.jpg" alt="InstaMedi's Logo" className="h-8" /></Link>
        </div>

        <div id="nav-links" className="hidden md:flex items-center space-x-4">
          <ul id="links" className="flex space-x-4">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='providers'>Providers</Link></li>
            <li><Link to='services'>Services</Link></li>
            <li><Link to='booking'>Booking</Link></li>
            <li><Link to='contactcard'>Contact</Link></li>
          </ul>
        </div>

        <div id="nav-button" className="flex space-x-4">
          <Link to="login"><button className="btn-blue">Login</button></Link>
          <Link to="signup"><button className="btn-blue">SignUp</button></Link>
        </div>

      </div>
    </>
  );
}

export default NavBar;
