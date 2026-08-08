import { Link, NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import { Store } from 'lucide-react';
import './NavBar.scss';

const NavBar = () => {
  return (
    <header className="navbar-container">
      <nav className="navbar-content">
        <Link to="/" className="navbar-brand">
          <Store size={28} color="#6366f1" />
          <span>LuminaStore</span>
        </Link>
        
        <div className="navbar-links">
          <NavLink to="/category/electronics" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>
            Electrónica
          </NavLink>
          <NavLink to="/category/clothing" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>
            Ropa
          </NavLink>
          <NavLink to="/category/accessories" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>
            Accesorios
          </NavLink>
        </div>

        <CartWidget />
      </nav>
    </header>
  );
};

export default NavBar;
