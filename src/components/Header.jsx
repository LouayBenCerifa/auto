function Header() {
  return (
    <header className="site-header">
      <div className="container header-container">
        <div className="logo-block">
          <img 
            src="/images/oceana-logo.png" 
            alt="OCEANA Lubrifiants" 
            className="logo-image"
          />
          <span className="logo-tag">auto parts & oils</span>
        </div>
        <div className="search-wrapper">
          <i className="fas fa-search"></i>
          <input type="text" placeholder="Search parts, oils, tools..." />
        </div>
        <div className="header-icons">
          <span><i className="far fa-user-circle"></i></span>
          <span><i className="fas fa-shopping-cart"></i></span>
          <span><i className="fas fa-map-marker-alt"></i></span>
        </div>
      </div>
    </header>
  );
}

export default Header;