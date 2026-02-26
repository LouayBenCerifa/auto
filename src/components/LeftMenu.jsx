import { useState } from 'react';

function LeftMenu() {
  const [activeCategory, setActiveCategory] = useState(null);

  const toggleCategory = (index) => {
    setActiveCategory(activeCategory === index ? null : index);
  };

  return (
    <div className="left-menu-permanent">
      <div className="menu-header-permanent">
        <h3><i className="fas fa-car"></i> SHOP BY CATEGORY</h3>
      </div>
      
      <div className="menu-search-permanent">
        <i className="fas fa-search"></i>
        <input type="text" placeholder="Search in categories..." />
      </div>
      
      <ul className="menu-categories-permanent">
        {/* ENGINE & PERFORMANCE */}
        <li className={`menu-category-permanent ${activeCategory === 0 ? 'active' : ''}`}>
          <div className="category-title-permanent" onClick={() => toggleCategory(0)}>
            <i className="fas fa-oil-can"></i> 
            <span>ENGINE & PERFORMANCE</span>
            <i className="fas fa-chevron-down submenu-arrow-permanent"></i>
          </div>
          <ul className="submenu-permanent">
            <li><a href="#"><i className="fas fa-oil-can"></i> Motor Oils</a></li>
            <li><a href="#"><i className="fas fa-filter"></i> Oil Filters</a></li>
            <li><a href="#"><i className="fas fa-tachometer-alt"></i> Air Intake Systems</a></li>
            <li><a href="#"><i className="fas fa-fire"></i> Spark Plugs</a></li>
            <li><a href="#"><i className="fas fa-bolt"></i> Ignition Coils</a></li>
            <li><a href="#"><i className="fas fa-microchip"></i> Engine Sensors</a></li>
            <li><a href="#"><i className="fas fa-fan"></i> Belts & Hoses</a></li>
            <li><a href="#"><i className="fas fa-water"></i> Coolants & Antifreeze</a></li>
            <li className="view-all-permanent"><a href="#">View All Engine Parts →</a></li>
          </ul>
        </li>
        
        {/* BRAKES & SUSPENSION */}
        <li className={`menu-category-permanent ${activeCategory === 1 ? 'active' : ''}`}>
          <div className="category-title-permanent" onClick={() => toggleCategory(1)}>
            <i className="fas fa-tachometer-alt"></i> 
            <span>BRAKES & SUSPENSION</span>
            <i className="fas fa-chevron-down submenu-arrow-permanent"></i>
          </div>
          <ul className="submenu-permanent">
            <li><a href="#"><i className="fas fa-tachometer-alt"></i> Brake Pads</a></li>
            <li><a href="#"><i className="fas fa-tachometer-alt"></i> Brake Rotors</a></li>
            <li><a href="#"><i className="fas fa-tachometer-alt"></i> Brake Calipers</a></li>
            <li><a href="#"><i className="fas fa-tachometer-alt"></i> Brake Fluid</a></li>
            <li><a href="#"><i className="fas fa-car"></i> Shock Absorbers</a></li>
            <li><a href="#"><i className="fas fa-car"></i> Struts & Coils</a></li>
            <li><a href="#"><i className="fas fa-cogs"></i> Control Arms</a></li>
            <li><a href="#"><i className="fas fa-cogs"></i> Tie Rod Ends</a></li>
            <li className="view-all-permanent"><a href="#">View All Brakes & Suspension →</a></li>
          </ul>
        </li>
        
        {/* ELECTRICAL & BATTERIES */}
        <li className={`menu-category-permanent ${activeCategory === 2 ? 'active' : ''}`}>
          <div className="category-title-permanent" onClick={() => toggleCategory(2)}>
            <i className="fas fa-car-battery"></i> 
            <span>ELECTRICAL & BATTERIES</span>
            <i className="fas fa-chevron-down submenu-arrow-permanent"></i>
          </div>
          <ul className="submenu-permanent">
            <li><a href="#"><i className="fas fa-car-battery"></i> Car Batteries</a></li>
            <li><a href="#"><i className="fas fa-bolt"></i> Alternators</a></li>
            <li><a href="#"><i className="fas fa-bolt"></i> Starters</a></li>
            <li><a href="#"><i className="fas fa-lightbulb"></i> Headlights</a></li>
            <li><a href="#"><i className="fas fa-lightbulb"></i> Tail Lights</a></li>
            <li><a href="#"><i className="fas fa-microchip"></i> Fuses & Relays</a></li>
            <li><a href="#"><i className="fas fa-charging-station"></i> Battery Chargers</a></li>
            <li className="view-all-permanent"><a href="#">View All Electrical →</a></li>
          </ul>
        </li>
        
        {/* FILTERS & FLUIDS */}
        <li className={`menu-category-permanent ${activeCategory === 3 ? 'active' : ''}`}>
          <div className="category-title-permanent" onClick={() => toggleCategory(3)}>
            <i className="fas fa-filter"></i> 
            <span>FILTERS & FLUIDS</span>
            <i className="fas fa-chevron-down submenu-arrow-permanent"></i>
          </div>
          <ul className="submenu-permanent">
            <li><a href="#"><i className="fas fa-filter"></i> Oil Filters</a></li>
            <li><a href="#"><i className="fas fa-filter"></i> Air Filters</a></li>
            <li><a href="#"><i className="fas fa-filter"></i> Cabin Air Filters</a></li>
            <li><a href="#"><i className="fas fa-filter"></i> Fuel Filters</a></li>
            <li><a href="#"><i className="fas fa-oil-can"></i> Transmission Fluid</a></li>
            <li><a href="#"><i className="fas fa-oil-can"></i> Brake Fluid</a></li>
            <li><a href="#"><i className="fas fa-water"></i> Coolant/Antifreeze</a></li>
            <li className="view-all-permanent"><a href="#">View All Filters & Fluids →</a></li>
          </ul>
        </li>
        
        {/* TOOLS & EQUIPMENT */}
        <li className={`menu-category-permanent ${activeCategory === 4 ? 'active' : ''}`}>
          <div className="category-title-permanent" onClick={() => toggleCategory(4)}>
            <i className="fas fa-tools"></i> 
            <span>TOOLS & EQUIPMENT</span>
            <i className="fas fa-chevron-down submenu-arrow-permanent"></i>
          </div>
          <ul className="submenu-permanent">
            <li><a href="#"><i className="fas fa-wrench"></i> Hand Tools</a></li>
            <li><a href="#"><i className="fas fa-tools"></i> Power Tools</a></li>
            <li><a href="#"><i className="fas fa-toolbox"></i> Tool Sets</a></li>
            <li><a href="#"><i className="fas fa-car"></i> Jacks & Stands</a></li>
            <li><a href="#"><i className="fas fa-compress"></i> Diagnostic Tools</a></li>
            <li><a href="#"><i className="fas fa-microchip"></i> Code Readers</a></li>
            <li className="view-all-permanent"><a href="#">View All Tools →</a></li>
          </ul>
        </li>
        
        {/* EXTERIOR & ACCESSORIES */}
        <li className={`menu-category-permanent ${activeCategory === 5 ? 'active' : ''}`}>
          <div className="category-title-permanent" onClick={() => toggleCategory(5)}>
            <i className="fas fa-car-side"></i> 
            <span>EXTERIOR & ACCESSORIES</span>
            <i className="fas fa-chevron-down submenu-arrow-permanent"></i>
          </div>
          <ul className="submenu-permanent">
            <li><a href="#"><i className="fas fa-car-side"></i> Mirrors</a></li>
            <li><a href="#"><i className="fas fa-car-side"></i> Door Handles</a></li>
            <li><a href="#"><i className="fas fa-wind"></i> Wiper Blades</a></li>
            <li><a href="#"><i className="fas fa-car"></i> Grilles</a></li>
            <li><a href="#"><i className="fas fa-car"></i> Bumpers</a></li>
            <li><a href="#"><i className="fas fa-lightbulb"></i> Lighting Accessories</a></li>
            <li className="view-all-permanent"><a href="#">View All Exterior →</a></li>
          </ul>
        </li>
        
        {/* INTERIOR & COMFORT */}
        <li className={`menu-category-permanent ${activeCategory === 6 ? 'active' : ''}`}>
          <div className="category-title-permanent" onClick={() => toggleCategory(6)}>
            <i className="fas fa-chair"></i> 
            <span>INTERIOR & COMFORT</span>
            <i className="fas fa-chevron-down submenu-arrow-permanent"></i>
          </div>
          <ul className="submenu-permanent">
            <li><a href="#"><i className="fas fa-chair"></i> Seat Covers</a></li>
            <li><a href="#"><i className="fas fa-carpet"></i> Floor Mats</a></li>
            <li><a href="#"><i className="fas fa-tachometer-alt"></i> Dashboard Covers</a></li>
            <li><a href="#"><i className="fas fa-fan"></i> Interior Fans</a></li>
            <li><a href="#"><i className="fas fa-phone"></i> Phone Mounts</a></li>
            <li><a href="#"><i className="fas fa-charging-station"></i> USB Chargers</a></li>
            <li className="view-all-permanent"><a href="#">View All Interior →</a></li>
          </ul>
        </li>
        
        {/* HOT DEALS */}
        <li className="menu-category-permanent promo-category-permanent">
          <div className="category-title-permanent">
            <i className="fas fa-tag"></i> 
            <span>HOT DEALS</span>
            <span className="promo-badge-permanent">SALE</span>
          </div>
          <ul className="submenu-permanent">
            <li><a href="#"><i className="fas fa-percent"></i> Clearance Up to 70% Off</a></li>
            <li><a href="#"><i className="fas fa-gift"></i> Buy 1 Get 1 Free</a></li>
            <li><a href="#"><i className="fas fa-truck"></i> Free Shipping Over $35</a></li>
            <li><a href="#"><i className="fas fa-star"></i> New Arrivals</a></li>
            <li><a href="#"><i className="fas fa-fire"></i> Best Sellers</a></li>
          </ul>
        </li>
      </ul>
      
      <div className="menu-footer-permanent">
        <div className="menu-footer-links-permanent">
          <a href="#"><i className="fas fa-store"></i> Store Locator</a>
          <a href="#"><i className="fas fa-headset"></i> Help Center</a>
          <a href="#"><i className="fas fa-tools"></i> Loan-a-Tool®</a>
          <a href="#"><i className="fas fa-recycle"></i> Recycling</a>
        </div>
        <div className="menu-footer-promo-permanent">
          <i className="fas fa-moon"></i> RAMADAN SPECIALS - UP TO 40% OFF
        </div>
      </div>
    </div>
  );
}

export default LeftMenu;