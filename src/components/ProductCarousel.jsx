import { useRef, useEffect } from 'react';
import { useCart } from '../context/CartContext'; // Import du hook

function ProductCarousel({ title, subtitle, products, compact = false }) {
  const { addToCart } = useCart(); // Récupération de la fonction
  const containerRef = useRef(null);
  const scrollBarRef = useRef(null);

  const scroll = (direction) => {
    if (containerRef.current) {
      const scrollAmount = 300;
      containerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const updateScrollBar = () => {
    if (containerRef.current && scrollBarRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      const scrollPercent = (scrollLeft / (scrollWidth - clientWidth)) * 100;
      scrollBarRef.current.style.width = `${scrollPercent}%`;
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', updateScrollBar);
      return () => container.removeEventListener('scroll', updateScrollBar);
    }
  }, []);

  const defaultProducts = products || [
    { badge: 'FREE OIL FILTER', icon: 'fa-oil-can', name: 'Mobil 1 5W-30', desc: 'Full Synthetic Motor Oil 5qt', price: 28.99, offer: 'With purchase of 5qts' },
    { badge: 'SALE', icon: 'fa-filter', name: 'FRAM Oil Filter', desc: 'Extra Guard PH3614', price: 9.99, offer: 'When you buy 5qts' },
    { badge: 'REWARDS', icon: 'fa-car-battery', name: 'DieHard Battery', desc: 'Gold 24F, 700 CCA', price: 189.99, offer: 'Free installation' },
    { badge: 'SAVE $20', icon: 'fa-tachometer-alt', name: 'Bosch Brake Pads', desc: 'QuietCast Ceramic - Front', price: 45.99, offer: '$20 off with code' },
    { badge: 'BESTSELLER', icon: 'fa-fan', name: 'Gates Belt Kit', desc: 'Serpentine Belt + Tensioner', price: 89.99, offer: 'Limited time' },
    { badge: 'FREE SHIPPING', icon: 'fa-bolt', name: 'NGK Spark Plugs', desc: 'Iridium IX - Set of 4', price: 32.99, offer: 'OE quality' },
    { badge: 'NEW', icon: 'fa-snowplow', name: 'Prestone Coolant', desc: '50/50 Prediluted 1 gal', price: 14.99, offer: 'Buy 2 save 15%' },
    { badge: 'SALE', icon: 'fa-wrench', name: 'Mechanic Tool Set', desc: '112-piece with case', price: 79.99, offer: 'Was $129.99' },
  ];

  // Fonction pour gérer le clic sur "Add to Cart"
  const handleAddToCart = (product) => {
    // Convertir le prix en nombre si c'est une chaîne
    const productToAdd = {
      id: product.id || Math.random(), // Générer un ID si pas présent
      name: product.name,
      price: typeof product.price === 'string' 
        ? parseFloat(product.price.replace('$', '')) 
        : product.price,
      icon: product.icon,
      description: product.desc
    };
    
    addToCart(productToAdd);
  };

  return (
    <section className={`product-carousel-section ${compact ? 'alt-bg' : ''}`}>
      <div className="container">
        <div className="carousel-header">
          <div className="header-left">
            <h2 className="section-title">{title}</h2>
            <p className="section-subtitle">{subtitle}</p>
          </div>
          <div className="carousel-nav">
            <button className="carousel-arrow prev" onClick={() => scroll('left')}>
              <i className="fas fa-chevron-left"></i>
            </button>
            <button className="carousel-arrow next" onClick={() => scroll('right')}>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>

        <div className={`products-horizontal-container`} ref={containerRef}>
          {defaultProducts.map((product, index) => (
            <div key={index} className={`product-horizontal-card ${compact ? 'compact' : ''}`}>
              <div className="product-badge">{product.badge}</div>
              <div className={`product-img ${compact ? 'small' : ''}`}>
                <i className={`fas ${product.icon}`}></i>
              </div>
              <h4>{product.name}</h4>
              <p className="product-desc">{product.desc}</p>
              <div className="product-price">
                {typeof product.price === 'number' 
                  ? `$${product.price.toFixed(2)}` 
                  : product.price}
              </div>
              <p className="product-offer">{product.offer}</p>
              <button 
                className="add-to-cart"
                onClick={() => handleAddToCart({...product, id: index + 1})}
              >
                <i className="fas fa-shopping-cart"></i> Add to Cart
              </button>
            </div>
          ))}
        </div>

        <div className="scroll-progress">
          <div className="scroll-bar" ref={scrollBarRef}></div>
        </div>
      </div>
    </section>
  );
}

export default ProductCarousel;