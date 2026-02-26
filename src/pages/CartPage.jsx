import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function CartPage() {
  const { cartItems, updateQuantity, removeFromCart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);

  const applyPromoCode = () => {
    if (promoCode.toUpperCase() === 'OCEANA10') {
      setDiscount(0.1);
      alert('Code promo appliqué : 10% de réduction !');
    } else {
      alert('Code promo invalide');
    }
  };

  const subtotal = cartTotal;
  const shipping = cartTotal > 100 ? 0 : 9.99;
  const tax = subtotal * 0.2;
  const discountAmount = subtotal * discount;
  const total = subtotal - discountAmount + shipping + tax;

  if (cartItems.length === 0) {
    return (
      <div className="empty-cart-page">
        <div className="container">
          <div className="empty-cart-content">
            <i className="fas fa-shopping-cart"></i>
            <h2>Votre panier est vide</h2>
            <p>Découvrez nos produits et commencez vos achats !</p>
            <button 
              className="btn-primary"
              onClick={() => navigate('/products')}
            >
              Voir les produits
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="container">
        <h1 className="page-title">Votre panier</h1>
        
        <div className="cart-layout">
          {/* Liste des produits */}
          <div className="cart-items-list">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item-row">
                <div className="cart-item-image">
                  <i className={`fas ${item.icon || 'fa-oil-can'}`}></i>
                </div>
                
                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <p className="cart-item-desc">{item.description || 'Produit automobile'}</p>
                  <p className="cart-item-price">${item.price}</p>
                </div>
                
                <div className="cart-item-quantity">
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="quantity-btn"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="quantity-btn"
                  >
                    +
                  </button>
                </div>
                
                <div className="cart-item-total">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
                
                <button 
                  className="remove-item"
                  onClick={() => removeFromCart(item.id)}
                >
                  <i className="fas fa-trash"></i>
                </button>
              </div>
            ))}
            
            <div className="cart-actions">
              <button className="btn-secondary" onClick={clearCart}>
                Vider le panier
              </button>
              <button 
                className="btn-primary"
                onClick={() => navigate('/products')}
              >
                Continuer les achats
              </button>
            </div>
          </div>

          {/* Résumé de la commande */}
          <div className="cart-summary">
            <h2>Résumé de la commande</h2>
            
            <div className="promo-code">
              <input
                type="text"
                placeholder="Code promo"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
              />
              <button onClick={applyPromoCode}>Appliquer</button>
            </div>
            
            <div className="summary-details">
              <div className="summary-row">
                <span>Sous-total:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              
              {discount > 0 && (
                <div className="summary-row discount">
                  <span>Réduction (10%):</span>
                  <span>-${discountAmount.toFixed(2)}</span>
                </div>
              )}
              
              <div className="summary-row">
                <span>Livraison:</span>
                <span>{shipping === 0 ? 'Gratuite' : `$${shipping.toFixed(2)}`}</span>
              </div>
              
              <div className="summary-row">
                <span>TVA (20%):</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              
              <div className="summary-row total">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            
            <button 
              className="btn-checkout-large"
              onClick={() => navigate('/checkout')}
            >
              Procéder au paiement
            </button>
            
            <div className="payment-methods">
              <p>Paiement sécurisé avec :</p>
              <div className="payment-icons">
                <i className="fab fa-cc-visa"></i>
                <i className="fab fa-cc-mastercard"></i>
                <i className="fab fa-cc-amex"></i>
                <i className="fab fa-cc-paypal"></i>
                <i className="fab fa-cc-stripe"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;