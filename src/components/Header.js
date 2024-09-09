import { Link, NavLink } from "react-router-dom";
import logo from "../assets/dofoll-tech-logo.png";


export default function Header() {
  const getClass = ({ isActive }) => (isActive ? "nav-active" : null);

  return (
    <header className="container">
      <div>
        <Link to='/'>
          <img 
            className='logo' 
            src={logo} 
            alt="logo"
            title ="Dofoll Technologies | Home" 
          />
        </Link>
      </div>
      <nav>
        <NavLink to='/' className={getClass}>Home</NavLink>
        <NavLink to='/about' className={getClass}>About</NavLink>
        <NavLink to='/categories' className={getClass}>Categories</NavLink>
        <NavLink to='/contact' className={getClass}>Contact US</NavLink>
      </nav>

    </header>
  );
}
