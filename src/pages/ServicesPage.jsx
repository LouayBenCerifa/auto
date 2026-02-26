function ServicesPage() {
  const services = [
    {
      icon: 'fas fa-check-circle',
      title: 'Test gratuit de pièces',
      description: 'Apportez vos pièces (batteries, alternateurs, démarreurs) en magasin pour un test gratuit et immédiat.',
      features: [
        'Batteries - test de charge',
        'Alternateurs - diagnostic complet',
        'Démarreurs - vérification',
        'Résultats en 5 minutes'
      ],
      cta: 'Trouver un magasin'
    },
    {
      icon: 'fas fa-tools',
      title: 'Loan-a-Tool®',
      description: 'Besoin d\'un outil spécial pour une réparation ? Empruntez-le gratuitement avec caution.',
      features: [
        'Plus de 100 outils disponibles',
        'Caution remboursable',
        'Prêt jusqu\'à 7 jours',
        'Outils professionnels'
      ],
      cta: 'Voir les outils'
    },
    {
      icon: 'fas fa-recycle',
      title: 'Recyclage écologique',
      description: 'Déposez vos batteries et huiles usagées dans nos points de collecte.',
      features: [
        'Batteries au plomb',
        'Huiles moteur usagées',
        'Filtres à huile',
        'Certifié ISO 14001'
      ],
      cta: 'En savoir plus'
    },
    {
      icon: 'fas fa-truck',
      title: 'Installation à domicile',
      description: 'Certains magasins proposent l\'installation de batteries à votre domicile.',
      features: [
        'Sur rendez-vous',
        'Batteries incluses',
        'Recyclage de l\'ancienne',
        'Garantie incluse'
      ],
      cta: 'Vérifier disponibilité'
    },
    {
      icon: 'fas fa-gem',
      title: 'Conseils d\'experts',
      description: 'Nos mécaniciens expérimentés vous conseillent gratuitement.',
      features: [
        'Diagnostic gratuit',
        'Conseils d\'entretien',
        'Recommandations produits',
        'Devis personnalisé'
      ],
      cta: 'Prendre rendez-vous'
    },
    {
      icon: 'fas fa-star',
      title: 'Programme de fidélité',
      description: 'Cumulez des points à chaque achat et bénéficiez de réductions exclusives.',
      features: [
        '1€ = 10 points',
        'Cadeaux à partir de 500 pts',
        'Offres membres exclusives',
        'Anniversaire - points bonus'
      ],
      cta: 'Devenir membre'
    }
  ];

  return (
    <div className="services-page">
      <div className="page-header">
        <h1 className="page-title">Nos Services</h1>
        <p className="page-subtitle">Des services conçus pour faciliter l'entretien de votre véhicule</p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">
              <i className={service.icon}></i>
            </div>
            <h3>{service.title}</h3>
            <p className="service-description">{service.description}</p>
            
            <ul className="service-features">
              {service.features.map((feature, i) => (
                <li key={i}>
                  <i className="fas fa-check"></i> {feature}
                </li>
              ))}
            </ul>
            
            <button className="service-cta">
              {service.cta} <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        ))}
      </div>

      <div className="services-cta-banner">
        <div className="banner-content">
          <h2>Besoin d'un service personnalisé ?</h2>
          <p>Contactez notre équipe pour une assistance sur mesure</p>
          <a href="/contact" className="btn-primary">
            Nous contacter
          </a>
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;