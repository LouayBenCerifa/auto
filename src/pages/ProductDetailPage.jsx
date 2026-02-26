import { useParams } from 'react-router-dom';

function ProductDetailPage() {
  const { id } = useParams();
  
  // Simulation de données produit (à remplacer par un vrai fetch plus tard)
  const product = {
    id: id,
    name: "Mobil 1 5W-30",
    category: "Huiles moteur",
    price: 45.99,
    originalPrice: 52.99,
    description: "Huile moteur synthétique haute performance pour moteurs essence et diesel. Offre une protection exceptionnelle contre l'usure et maintient le moteur propre.",
    features: [
      "Protection contre l'usure",
      "Résistance aux hautes températures",
      "Économie de carburant",
      "Protection du système de dépollution"
    ],
    inStock: true,
    rating: 4.8,
    reviews: 124
  };

  return (
    <div className="product-detail-page">
      <div className="product-detail-container">
        {/* Image du produit */}
        <div className="product-detail-image">
          <i className="fas fa-oil-can"></i>
        </div>

        {/* Infos du produit */}
        <div className="product-detail-info">
          <h1 className="product-detail-title">{product.name}</h1>
          
          <div className="product-detail-category">
            Catégorie: {product.category}
          </div>

          <div className="product-detail-rating">
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <i key={i} className={`fas fa-star ${i < Math.floor(product.rating) ? 'filled' : ''}`}></i>
              ))}
            </div>
            <span className="rating-count">({product.reviews} avis)</span>
          </div>

          <div className="product-detail-price">
            <span className="current-price">${product.price}</span>
            {product.originalPrice && (
              <span className="original-price">${product.originalPrice}</span>
            )}
          </div>

          <p className="product-detail-description">{product.description}</p>

          <div className="product-detail-features">
            <h3>Caractéristiques :</h3>
            <ul>
              {product.features.map((feature, index) => (
                <li key={index}>
                  <i className="fas fa-check"></i> {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="product-detail-actions">
            <div className="quantity-selector">
              <button className="quantity-btn">-</button>
              <input type="number" value="1" readOnly />
              <button className="quantity-btn">+</button>
            </div>
            
            <button className="btn-add-to-cart-large">
              <i className="fas fa-shopping-cart"></i> Ajouter au panier
            </button>
          </div>

          <div className="product-meta">
            <p><i className="fas fa-check-circle"></i> En stock</p>
            <p><i className="fas fa-truck"></i> Livraison gratuite</p>
            <p><i className="fas fa-undo"></i> Retour sous 30 jours</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;