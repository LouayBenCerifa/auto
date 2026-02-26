import { useCart } from '../context/CartContext';

function Header() {
  const { itemCount, setIsCartOpen } = useCart();

  return (
    <header className="site-header">
      <div className="container header-container">
        <div className="logo-block">
          <img 
            src="/images/oceana-logo.png" 
            alt="OCEANA" 
            className="logo-image"
          />
          <span className="logo-tag">auto parts & oils</span>
        </div>
        
        <div className="search-wrapper">
          <i className="fas fa-search"></i>
          <input type="text" placeholder="Search parts, oils, tools..." />
        </div>
        
        <div className="header-icons">
  <span>👤</span>  {/* User icon */}
  
  <span 
    className="cart-icon-container"
    onClick={() => setIsCartOpen(true)}
    style={{ position: 'relative', cursor: 'pointer' }}
  >
    🛒  {/* Cart icon */}
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