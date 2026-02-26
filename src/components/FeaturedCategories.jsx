function FeaturedCategories() {
  const categories = [
    { icon: 'fa-oil-can', name: 'BRANDED OILS' },
    { icon: 'fa-tachometer-alt', name: 'BRAKE BEYOND' },
    { icon: 'fa-filter', name: 'ESSENTIAL FILTERS' },
    { icon: 'fa-tag', name: 'CLEARANCE' },
    { icon: 'fa-car', name: 'ENGINE PARTS' },
    { icon: 'fa-bolt', name: 'ELECTRICAL' },
    { icon: 'fa-fan', name: 'COOLING SYSTEM' },
    { icon: 'fa-wrench', name: 'HAND TOOLS' },
    { icon: 'fa-microchip', name: 'SENSORS' },
    { icon: 'fa-car-battery', name: 'BATTERIES' },
    { icon: 'fa-water', name: 'COOLANTS' },
    { icon: 'fa-shield-alt', name: 'ADDITIVES' },
    { icon: 'fa-truck', name: 'TOWING' },
    { icon: 'fa-spray-can', name: 'CLEANERS' },
    { icon: 'fa-cogs', name: 'DRIVETRAIN' },
    { icon: 'fa-charging-station', name: 'CHARGING' },
    { icon: 'fa-gem', name: 'PREMIUM' },
    { icon: 'fa-star', name: 'BEST SELLERS' },
    { icon: 'fa-gift', name: 'SPECIAL OFFERS' },
    { icon: 'fa-clock', name: 'SAME DAY PICKUP' },
  ];

  return (
    <section className="featured-categories">
      <div className="container">
        <h2 className="section-title">FEATURED CATEGORIES</h2>
        <div className="category-grid">
          {categories.map((cat, index) => (
            <div key={index} className="category-item">
              <i className={`fas ${cat.icon}`}></i> {cat.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedCategories;