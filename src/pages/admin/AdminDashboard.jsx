// src/pages/admin/AdminDashboard.jsx
import { useAuth } from '../../context/AuthContext';

function AdminDashboard() {
  const { user } = useAuth();

  return (
    <div className="admin-dashboard">
      <h1>Dashboard Admin</h1>
      <p>Bienvenue {user?.firstName} !</p>
      
      <div className="admin-stats">
        <div className="stat-card">
          <h3>Produits</h3>
          <p>0</p>
        </div>
        <div className="stat-card">
          <h3>Commandes</h3>
          <p>0</p>
        </div>
        <div className="stat-card">
          <h3>Clients</h3>
          <p>0</p>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;