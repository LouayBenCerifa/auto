function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h4>GET IN THE ZONE</h4>
            <p>Discover great deals, promotions, and exclusive offers in-store and online.</p>
            <div className="newsletter">
              <input type="email" placeholder="Your email address" />
              <button>Subscribe</button>
            </div>
          </div>
          <div className="footer-col">
            <h4>SHOP</h4>
            <ul>
              <li><a href="#">New Arrivals</a></li>
              <li><a href="#">Best Sellers</a></li>
              <li><a href="#">Clearance</a></li>
              <li><a href="#">Rebates</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>SERVICES</h4>
            <ul>
              <li><a href="#">Free Testing</a></li>
              <li><a href="#">Loan-a-Tool®</a></li>
              <li><a href="#">Battery Recycling</a></li>
              <li><a href="#">Shop Referral</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>SUPPORT</h4>
            <ul>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">Store Locator</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>LEASING A STORE</h4>
            <ul>
              <li><a href="#">Own a Franchise</a></li>
              <li><a href="#">Licensing</a></li>
              <li><a href="#">Opportunities</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 OCEANA Automotive. All rights reserved.</p>
          <div className="social-links">
            <a href="https://www.facebook.com">facebook<i className="fab fa-facebook"></i></a>
            <a href="https://www.instagram.com">instagram<i className="fab fa-instagram"></i></a>
            <a href="https://www.youtube.com">youtube<i className="fab fa-youtube"></i></a>
            <a href="https://www.twitter.com">twitter<i className="fab fa-twitter"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;