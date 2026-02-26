import { useState } from 'react';
import { Link } from 'react-router-dom';

function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  const categories = [
    { id: 'all', name: 'Tous les produits' },
    { id: 'engine-oils', name: 'Huiles moteur' },
    { id: 'brakes', name: 'Freins' },
    { id: 'filters', name: 'Filtres' },
    { id: 'batteries', name: 'Batteries' },
    { id: 'tools', name: 'Outils' },
  ];

  const products = [
    {
      id: 1,
      name: 'Mobil 1 5W-30',
      category: 'engine-oils',
      price: 45.99,
      originalPrice: 52.99,
      rating: 4.8,
      reviews: 124,
      image: 'fas fa-oil-can',
      badge: 'BESTSELLER',
      description: 'Huile moteur synthétique haute performance',
      inStock: true,
    },
    {
      id: 2,
      name: 'Bosch Brake Pads',
      category: 'brakes',
      price: 39.99,
      originalPrice: 49.99,
      rating: 4.7,
      reviews: 89,
      image: 'fas fa-tachometer-alt',
      badge: 'SALE',
      description: 'Plaquettes de frein céramique',
      inStock: true,
    },
    {
      id: 3,
      name: 'FRAM Oil Filter',
      category: 'filters',
      price: 12.99,
      originalPrice: null,
      rating: 4.9,
      reviews: 256,
      image: 'fas fa-filter',
      badge: 'TOP RATED',
      description: 'Filtre à huile Extra Guard',
      inStock: true,
    },
    {
      id: 4,
      name: 'DieHard Battery',
      category: 'batteries',
      price: 189.99,
      originalPrice: 219.99,
      rating: 4.8,
      reviews: 67,
      image: 'fas fa-car-battery',
      badge: 'FREE INSTALL',
      description: 'Batterie AGM 700 CCA',
      inStock: true,
    },
    {
      id: 5,
      name: 'NGK Spark Plugs',
      category: 'engine-parts',
      price: 32.99,
      originalPrice: 39.99,
      rating: 4.9,
      reviews: 178,
      image: 'fas fa-bolt',
      badge: 'IRIDIUM',
      description: 'Bougies d\'allumage Iridium IX',
      inStock: true,
    },
    {
      id: 6,
      name: 'Prestone Coolant',
      category: 'fluids',
      price: 14.99,
      originalPrice: null,
      rating: 4.6,
      reviews: 92,
      image: 'fas fa-snowplow',
      badge: 'BUY 2 SAVE',
      description: 'Liquide de refroidissement 50/50',
      inStock: false,
    },
    {
      id: 7,
      name: 'Mechanic Tool Set',
      category: 'tools',
      price: 79.99,
      originalPrice: 129.99,
      rating: 4.9,
      reviews: 203,
      image: 'fas fa-tools',
      badge: 'BEST VALUE',
      description: 'Coffret 112 pièces avec mallette',
      inStock: true,
    },
    {
      id: 8,
      name: 'Castrol Edge 5W-40',
      category: 'engine-oils',
      price: 49.99,
      originalPrice: 59.99,
      rating: 4.8,
      reviews: 145,
      image: 'fas fa-oil-can',
      badge: 'EUROPEAN',
      description: 'Huile moteur pour voitures européennes',
      inStock: true,
    },
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0; // popular par défaut
  });

  return (
    <div className="products-page">
      {/* En-tête de la page */}
      <div className="page-header">
        <h1 className="page-title">Tous nos produits</h1>
        <p className="page-subtitle">{filteredProducts.length} produits disponibles</p>
      </div>

      {/* Barre de filtres et tri */}
      <div className="products-toolbar">
        <div className="categories-filter">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`category-btn ${selectedCategory === cat.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>
        <div className="sort-selector">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="popular">Plus populaires</option>
            <option value="price-low">Prix: croissant</option>
            <option value="price-high">Prix: décroissant</option>
            <option value="rating">Meilleures notes</option>
          </select>
        </div>
      </div>

      {/* Grille de produits */}
      <div className="products-grid-detailed">
        {sortedProducts.map(product => (
          <div key={product.id} className="product-card-detailed">
            {product.badge && <div className="product-badge-detailed">{product.badge}</div>}
            <div className="product-image-detailed">
              <i className={`fas ${product.image}`}></i>
            </div>
            <div className="product-info-detailed">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.description}</p>
              
              <div className="product-rating">
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className={`fas fa-star ${i < Math.floor(product.rating) ? 'filled' : ''}`}></i>
                  ))}
                </div>
                <span className="rating-count">({product.reviews} avis)</span>
              </div>

              <div className="product-price-detailed">
                <span className="current-price">${product.price}</span>
                {product.originalPrice && (
                  <span className="original-price">${product.originalPrice}</span>
                )}
              </div>

              <div className="product-actions">
                <button className="btn-add-to-cart">
                  <i className="fas fa-shopping-cart"></i> Ajouter
                </button>
                <Link to={`/product/${product.id}`} className="btn-view-details">
                  Détails
                </Link>
              </div>

              {!product.inStock && (
                <div className="out-of-stock">Rupture de stock</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;