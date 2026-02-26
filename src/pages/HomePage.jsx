import { useCart } from '../context/CartContext';
import ProductCarousel from '../components/ProductCarousel';
import HeroTesting from '../components/HeroTesting';
import FeaturedCategories from '../components/FeaturedCategories';
import SponsoredProducts from '../components/SponsoredProducts';
import Performance from '../components/Performance';

function HomePage() {
  const { addToCart } = useCart();
  
  const testProduct = {
    id: 1,
    name: "Mobil 1 5W-30",
    price: 29.99,
    icon: "fa-oil-can",
    description: "Huile moteur synthétique"
  };

  const brakeProducts = [
    { badge: 'SALE', icon: 'fa-tachometer-alt', name: 'Brake Rotor', desc: 'Front - Drilled/Slotted', price: '$89.99', offer: 'Each' },
    { badge: 'BESTSELLER', icon: 'fa-tachometer-alt', name: 'Ceramic Pads', desc: 'Premium quiet formula', price: '$42.99', offer: 'Set of 4' },
    { badge: 'SALE', icon: 'fa-tachometer-alt', name: 'Brake Caliper', desc: 'Remanufactured - Front', price: '$54.99', offer: 'Core charge $15' },
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

export default HomePage;