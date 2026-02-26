import { useState } from 'react';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici vous enverrez les données à votre backend
    console.log('Formulaire soumis:', formData);
    setSubmitted(true);
    
    // Réinitialiser après 5 secondes
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="contact-page">
      <div className="page-header">
        <h1 className="page-title">Contactez-nous</h1>
        <p className="page-subtitle">Notre équipe est là pour vous aider</p>
      </div>

      <div className="contact-grid">
        {/* Informations de contact */}
        <div className="contact-info-section">
          <div className="info-card">
            <i className="fas fa-map-marker-alt"></i>
            <h3>Adresse</h3>
            <p>123 Avenue de l'Automobile<br />75001 Paris, France</p>
          </div>

          <div className="info-card">
            <i className="fas fa-phone"></i>
            <h3>Téléphone</h3>
            <p>+33 1 23 45 67 89</p>
            <p className="info-note">Lun-Ven: 9h-18h</p>
          </div>

          <div className="info-card">
            <i className="fas fa-envelope"></i>
            <h3>Email</h3>
            <p>contact@oceana-auto.fr</p>
            <p>support@oceana-auto.fr</p>
          </div>

          <div className="info-card">
            <i className="fas fa-clock"></i>
            <h3>Horaires</h3>
            <p>Lundi - Vendredi: 9h - 19h</p>
            <p>Samedi: 9h - 17h</p>
            <p>Dimanche: Fermé</p>
          </div>
        </div>

        {/* Formulaire de contact */}
        <div className="contact-form-section">
          {submitted ? (
            <div className="success-message">
              <i className="fas fa-check-circle"></i>
              <h3>Message envoyé !</h3>
              <p>Nous vous répondrons dans les plus brefs délais.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form-detailed">
              <div className="form-group">
                <label htmlFor="name">Nom complet *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Votre nom"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="votre@email.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Téléphone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="01 23 45 67 89"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Sujet *</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">Choisissez un sujet</option>
                  <option value="info">Demande d'information</option>
                  <option value="product">Question sur un produit</option>
                  <option value="order">Suivi de commande</option>
                  <option value="support">Support technique</option>
                  <option value="other">Autre</option>
                </select>
              </div>

              <div className="form-group full-width">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Votre message..."
                ></textarea>
              </div>

              <div className="form-group full-width">
                <button type="submit" className="btn-submit">
                  <i className="fas fa-paper-plane"></i> Envoyer le message
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Carte Google Maps */}
      <div className="map-section">
        <iframe
          title="Localisation OCEANA"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.874102227142!2d2.335455315674307!3d48.8606110792876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671d877937b0f%3A0xb975fcfa192f84d4!2sMus%C3%A9e%20du%20Louvre!5e0!3m2!1sfr!2sfr!4v1649876543210"
          width="100%"
          height="400"
          style={{ border: 0, borderRadius: '12px' }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default ContactPage;