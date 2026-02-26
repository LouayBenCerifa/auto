import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="main-nav">
      <div className="container">
        <ul className="nav-links">
          <li><Link to="/">ACCUEIL</Link></li>
          <li><Link to="/products">PRODUITS</Link></li>
          <li><Link to="/services">SERVICES</Link></li>
          <li><Link to="/about">À PROPOS</Link></li>
          <li><Link to="/contact">CONTACT</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;