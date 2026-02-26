import { Outlet } from 'react-router-dom';
import LeftMenu from '../../components/LeftMenu';  // Un seul ../ pour sortir de layout
import Header from '../../components/Header';      // et aller dans components
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

function Layout() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <div className="layout-2col">
        <aside className="sidebar-left">
          <LeftMenu />
        </aside>
        <main className="content-right">
          <Outlet /> {/* C'est ici que les pages seront affichées */}
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;