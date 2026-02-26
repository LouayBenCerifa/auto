import { useRef, useEffect } from 'react';
import { useCart } from '../context/CartContext';

function ProductCarousel({ title, subtitle, products, compact = false }) {
  const { addToCart } = useCart();
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

  // Liste d'icônes par défaut pour toujours avoir quelque chose à afficher
  const defaultIcons = [
    'fa-oil-can',
    'fa-filter',
    'fa-car-battery',
    'fa-tachometer-alt',
    'fa-fan',
    'fa-bolt',
    'fa-snowplow',
    'fa-wrench',
    'fa-tools',
    'fa-microchip',
    'fa-charging-station',
    'fa-water',
  ];

  // Produits par défaut si aucun n'est fourni
  const defaultProducts = products || [
    { badge: 'FREE OIL FILTER', icon: 'fa-oil-can', name: 'Mobil 1 5W-30', desc: 'Full Synthetic Motor Oil 5qt', price: '$28.99', offer: 'With purchase of 5qts' },
    { badge: 'SALE', icon: 'fa-filter', name: 'FRAM Oil Filter', desc: 'Extra Guard PH3614', price: '$9.99', offer: 'When you buy 5qts' },
    { badge: 'REWARDS', icon: 'fa-car-battery', name: 'DieHard Battery', desc: 'Gold 24F, 700 CCA', price: '$189.99', offer: 'Free installation' },
    { badge: 'SAVE $20', icon: 'fa-tachometer-alt', name: 'Bosch Brake Pads', desc: 'QuietCast Ceramic - Front', price: '$45.99', offer: '$20 off with code' },
    { badge: 'BESTSELLER', icon: 'fa-fan', name: 'Gates Belt Kit', desc: 'Serpentine Belt + Tensioner', price: '$89.99', offer: 'Limited time' },
    { badge: 'FREE SHIPPING', icon: 'fa-bolt', name: 'NGK Spark Plugs', desc: 'Iridium IX - Set of 4', price: '$32.99', offer: 'OE quality' },
    { badge: 'NEW', icon: 'fa-snowplow', name: 'Prestone Coolant', desc: '50/50 Prediluted 1 gal', price: '$14.99', offer: 'Buy 2 save 15%' },
    { badge: 'SALE', icon: 'fa-wrench', name: 'Mechanic Tool Set', desc: '112-piece with case', price: '$79.99', offer: 'Was $129.99' },
  ];

  // Fonction pour obtenir une icône par défaut basée sur l'index
  const getDefaultIcon = (index) => {
    return defaultIcons[index % defaultIcons.length];
  };

  // Fonction pour obtenir une couleur basée sur l'icône
  const getIconColor = (icon) => {
    // Couleurs différentes selon le type d'icône
    if (icon.includes('oil')) return '#0A2A44'; // Bleu foncé pour huile
    if (icon.includes('filter')) return '#C85C17'; // Orange pour filtres
    if (icon.includes('battery')) return '#0A2A44'; // Bleu pour batteries
    if (icon.includes('tachometer')) return '#C85C17'; // Orange pour freins
    if (icon.includes('fan')) return '#0A2A44'; // Bleu pour ventilateurs
    if (icon.includes('bolt')) return '#C85C17'; // Orange pour bougies
    return '#0A2A44'; // Couleur par défaut
  };

  const handleAddToCart = (product, index) => {
    // S'assurer que le produit a un nom avant d'ajouter au panier
    if (!product.name) return;
    
    const productToAdd = {
      id: product.id || Date.now() + index,
      name: product.name,
      price: typeof product.price === 'string' 
        ? parseFloat(product.price.replace('$', '')) 
        : (product.price || 0),
      icon: product.icon || getDefaultIcon(index),
      description: product.desc || 'Produit automobile'
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
          {defaultProducts.map((product, index) => {
            // Déterminer l'icône à afficher (toujours une icône, même si non spécifiée)
            const iconToShow = product.icon || getDefaultIcon(index);
            const iconColor = getIconColor(iconToShow);
            
            return (
              <div key={index} className={`product-horizontal-card ${compact ? 'compact' : ''}`}>
                {/* Badge - seulement si existe */}
                {product.badge && <div className="product-badge">{product.badge}</div>}
                
                {/* Image avec icône - TOUJOURS affichée */}
                <div className={`product-img ${compact ? 'small' : ''}`}>
                  <i className={`fas ${iconToShow}`} style={{ color: iconColor }}></i>
                </div>
                
                {/* Nom du produit - avec fallback */}
                <h4>{product.name || "Nouveau produit"}</h4>
                
                {/* Description - avec fallback */}
                <p className="product-desc">{product.desc || "Bientôt disponible"}</p>
                
                {/* Prix - avec fallback */}
                <div className="product-price">
                  {product.price || "À venir"}
                </div>
                
                {/* Offre - seulement si existe */}
                {product.offer && <p className="product-offer">{product.offer}</p>}
                
                {/* Bouton - désactivé si pas de nom de produit */}
                {product.name ? (
                  <button 
                    className="add-to-cart"
                    onClick={() => handleAddToCart(product, index)}
                  >
                    <i className="fas fa-shopping-cart"></i> Add to Cart
                  </button>
                ) : (
                  <button className="add-to-cart disabled" disabled>
                    <i className="fas fa-clock"></i> Bientôt
                  </button>
                )}
              </div>
            );
          })}
        </div>

        <div className="scroll-progress">
          <div className="scroll-bar" ref={scrollBarRef}></div>
        </div>
      </div>
    </section>
  );
}

export default ProductCarousel;