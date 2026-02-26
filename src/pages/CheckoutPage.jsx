import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

function CheckoutPage() {
  const { cartItems, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    country: 'France'
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simuler un paiement
    setTimeout(() => {
      setIsProcessing(false);
      clearCart();
      alert('Commande confirmée ! Merci pour votre achat.');
      navigate('/');
    }, 2000);
  };

  const subtotal = cartTotal;
  const shipping = cartTotal > 100 ? 0 : 9.99;
  const tax = subtotal * 0.2;
  const total = subtotal + shipping + tax;

  if (cartItems.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <div className="checkout-page">
      <div className="container">
        <h1 className="page-title">Finaliser la commande</h1>
        
        <div className="checkout-layout">
          {/* Formulaire de livraison */}
          <div className="checkout-form">
            <h2>Informations de livraison</h2>
            
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Prénom *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Nom *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label>Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label>Adresse *</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label>Ville *</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Code postal *</label>
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label>Pays</label>
                <select name="country" value={formData.country} onChange={handleInputChange}>
                  <option>France</option>
                  <option>Belgique</option>
                  <option>Suisse</option>
                  <option>Luxembourg</option>
                </select>
              </div>

              <h2 style={{ marginTop: '30px' }}>Paiement</h2>
              
              <div className="card-element-container">
                <input
                  type="text"
                  placeholder="Numéro de carte"
                  className="card-input"
                  value="4242 4242 4242 4242"
                  disabled
                />
                <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                  <input type="text" placeholder="MM/AA" value="12/25" disabled style={{ flex: 1 }} />
                  <input type="text" placeholder="CVC" value="123" disabled style={{ flex: 1 }} />
                </div>
                <p style={{ fontSize: '0.8rem', color: '#666', marginTop: '10px' }}>
                  Mode test - Aucun paiement réel
                </p>
              </div>

              <button 
                type="submit" 
                className="btn-pay"
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <>Traitement en cours <i className="fas fa-spinner fa-spin"></i></>
                ) : (
                  <>Payer ${total.toFixed(2)}</>
                )}
              </button>
            </form>
          </div>

          {/* Résumé de la commande */}
          <div className="checkout-summary">
            <h2>Votre commande</h2>
            
            {cartItems.map(item => (
              <div key={item.id} className="checkout-item">
                <div className="checkout-item-info">
                  <span className="checkout-item-name">{item.name}</span>
                  <span className="checkout-item-quantity">x{item.quantity}</span>
                </div>
                <span className="checkout-item-price">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
            
            <div className="checkout-summary-details">
              <div className="summary-row">
                <span>Sous-total:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Livraison:</span>
                <span>{shipping === 0 ? 'Gratuite' : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className="summary-row">
                <span>TVA:</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="summary-row total">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;