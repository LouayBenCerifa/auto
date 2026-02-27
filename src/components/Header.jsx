import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const { itemCount, setIsCartOpen } = useCart();
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="site-header">
      <div className="container header-container">
        {/* Logo à gauche */}
        <div className="logo-block">
          <Link to="/" className="logo-link">
            <img 
              src="/images/oceana-logo.png" 
              alt="OCEANA" 
              className="logo-image"
            />
            <span className="logo-tag">auto parts & oils</span>
          </Link>
        </div>
        
        {/* Barre de recherche au milieu */}
        <div className="search-wrapper">
          <i className="fas fa-search"></i>
          <input type="text" placeholder="Search parts, oils, tools..." />
        </div>
        
        {/* Actions à droite */}
        <div className="header-actions">
          {/* Section authentification */}
          {isAuthenticated ? (
            <div className="user-menu">
              <span className="user-greeting">
                <i className="fas fa-user-circle"></i>
                {user?.firstName || 'User'}
              </span>
              <button 
                onClick={handleLogout} 
                className="logout-btn"
                title="Déconnexion"
              >
                <i className="fas fa-sign-out-alt"></i>🔓 
              </button>
            </div>
          ) : (
            <div className="auth-buttons">
              <Link to="/login" className="auth-link login-link">
                <i className="fas fa-sign-in-alt"></i>
                <span>Connexion</span>
              </Link>
              <Link to="/register" className="auth-link register-link">
                <i className="fas fa-user-plus"></i>
                <span>Inscription</span>
              </Link>
            </div>
          )}

          {/* Séparateur */}
          <div className="header-divider"></div>

          {/* Icône panier */}
          <span 
            className="cart-icon-container"
            onClick={() => setIsCartOpen(true)}
            title="Voir le panier"
          >
            🛒
            {itemCount > 0 && (
              <span className="cart-badge">{itemCount}</span>
            )}
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;