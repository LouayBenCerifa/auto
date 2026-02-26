function AboutPage() {
  return (
    <div className="about-page">
      <div className="page-header">
        <h1 className="page-title">À propos d'OCEANA</h1>
        <p className="page-subtitle">Votre partenaire automobile depuis 1998</p>
      </div>

      <div className="about-hero">
        <div className="about-hero-content">
          <h2>Plus de 25 ans d'expertise</h2>
          <p>
            Fondée en 1998, OCEANA est devenue un acteur majeur dans la distribution 
            de pièces automobiles et lubrifiants en France. Notre engagement : 
            fournir des produits de qualité à des prix compétitifs, avec un service 
            client exceptionnel.
          </p>
        </div>
        <div className="about-hero-image">
          <i className="fas fa-building"></i>
        </div>
      </div>

      <div className="values-section">
        <h2 className="section-title">Nos valeurs</h2>
        <div className="values-grid">
          <div className="value-card">
            <i className="fas fa-medal"></i>
            <h3>Qualité</h3>
            <p>Nous sélectionnons uniquement des produits répondant aux normes les plus strictes.</p>
          </div>
          <div className="value-card">
            <i className="fas fa-hand-holding-heart"></i>
            <h3>Confiance</h3>
            <p>Des relations durables avec nos clients basées sur la transparence.</p>
          </div>
          <div className="value-card">
            <i className="fas fa-truck"></i>
            <h3>Rapidité</h3>
            <p>Livraison express et service efficace pour vos projets urgents.</p>
          </div>
          <div className="value-card">
            <i className="fas fa-leaf"></i>
            <h3>Écoresponsabilité</h3>
            <p>Recyclage des batteries et huiles usagées, emballages éco-conçus.</p>
          </div>
        </div>
      </div>

      <div className="stats-section">
        <div className="stats-grid">
          <div className="stat-item">
            <span className="stat-number">25+</span>
            <span className="stat-label">Années d'expérience</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">50k+</span>
            <span className="stat-label">Clients satisfaits</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">15k+</span>
            <span className="stat-label">Produits référencés</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">4.9/5</span>
            <span className="stat-label">Note moyenne</span>
          </div>
        </div>
      </div>

      <div className="team-section">
        <h2 className="section-title">Notre équipe</h2>
        <div className="team-grid">
          <div className="team-member">
            <div className="member-avatar">
              <i className="fas fa-user-circle"></i>
            </div>
            <h3>Jean Dupont</h3>
            <p>Fondateur & CEO</p>
          </div>
          <div className="team-member">
            <div className="member-avatar">
              <i className="fas fa-user-circle"></i>
            </div>
            <h3>Marie Martin</h3>
            <p>Directrice Commerciale</p>
          </div>
          <div className="team-member">
            <div className="member-avatar">
              <i className="fas fa-user-circle"></i>
            </div>
            <h3>Pierre Bernard</h3>
            <p>Responsable Technique</p>
          </div>
          <div className="team-member">
            <div className="member-avatar">
              <i className="fas fa-user-circle"></i>
            </div>
            <h3>Sophie Dubois</h3>
            <p>Service Client</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;