import ProductCarousel from '../components/ProductCarousel';
import HeroTesting from '../components/HeroTesting';
import FeaturedCategories from '../components/FeaturedCategories';
import SponsoredProducts from '../components/SponsoredProducts';
import Performance from '../components/Performance';

function HomePage() {
  const brakeProducts = [
    { badge: 'SALE', icon: 'fa-tachometer-alt', name: 'Brake Rotor', desc: 'Front - Drilled/Slotted', price: '$89.99', offer: 'Each' },
    { badge: 'BESTSELLER', icon: 'fa-tachometer-alt', name: 'Ceramic Pads', desc: 'Premium quiet formula', price: '$42.99', offer: 'Set of 4' },
    { badge: 'SALE', icon: 'fa-tachometer-alt', name: 'Brake Caliper', desc: 'Remanufactured - Front', price: '$54.99', offer: 'Core charge $15' },
    { badge: 'NEW', icon: 'fa-tachometer-alt', name: 'Brake Fluid', desc: 'DOT 4 - 32 oz', price: '$8.99', offer: 'High boiling point' },
    { badge: 'FREE SHIPPING', icon: 'fa-tachometer-alt', name: 'Brake Line Kit', desc: 'Stainless steel braided', price: '$129.99', offer: 'Full set' },
    { badge: 'SALE', icon: 'fa-tachometer-alt', name: 'Brake Cleaner', desc: '19 oz aerosol', price: '$6.99', offer: 'Non-chlorinated' },
  ];

  return (
    <>
      <ProductCarousel 
        title="FEATURED PRODUCTS" 
        subtitle="Shop our most popular auto parts"
      />
      <ProductCarousel 
        title="BRAKE & ROTORS" 
        subtitle="Stop safely with premium braking systems"
        products={brakeProducts}
        compact={true}
      />
      <HeroTesting />
      <FeaturedCategories />
      <SponsoredProducts />
      <Performance />
    </>
  );
}

export default HomePage;  // <-- Vérifiez que cette ligne est bien présente !