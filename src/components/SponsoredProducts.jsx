function SponsoredProducts() {
  const sponsored = [
    { icon: 'fa-oil-can', name: 'Premium Synthetic Oil', desc: '5W-30 Full Synthetic', price: '$32.99' },
    { icon: 'fa-car-battery', name: 'AGM Battery', desc: 'H6 Group Size, 760 CCA', price: '$189.99' },
    { icon: 'fa-filter', name: 'Premium Oil Filter', desc: 'Extended protection', price: '$12.99' },
    { icon: 'fa-tachometer-alt', name: 'Brake Pad Set', desc: 'Ceramic, front', price: '$45.99' },
  ];

  return (
    <section className="sponsored">
      <div className="container">
        <h2 className="section-title">SPONSORED PRODUCTS</h2>
        <div className="sponsored-grid">
          {sponsored.map((item, index) => (
            <div key={index} className="sponsored-card">
              <div className="sponsored-badge">SPONSORED</div>
              <i className={`fas ${item.icon} sponsored-icon`}></i>
              <h4>{item.name}</h4>
              <p>{item.desc}</p>
              <div className="price">{item.price}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SponsoredProducts;