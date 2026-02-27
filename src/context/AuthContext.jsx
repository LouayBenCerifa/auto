import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

// Configuration d'axios
const api = axios.create({
  baseURL: process.env.NODE_ENV === 'production'
    ? 'https://oceana-api.onrender.com/api'  // ✅ VOTRE API
    : 'http://localhost:5000/api',
});

// Intercepteur pour ajouter le token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Charger l'utilisateur au démarrage
  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem('token');
      
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const response = await api.get('/auth/me');
        setUser(response.data.user);
      } catch (err) {
        console.error('Erreur chargement utilisateur:', err);
        localStorage.removeItem('token');
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, []);

  // Inscription
  const register = async (email, password, firstName, lastName) => {
    try {
      setError(null);
      const response = await api.post('/auth/register', {
        email,
        password,
        firstName,
        lastName
      });

      const { token, user } = response.data;
      localStorage.setItem('token', token);
      setUser(user);
      
      return { success: true, user };
    } catch (err) {
      const message = err.response?.data?.message || 'Erreur lors de l\'inscription';
      setError(message);
      return { success: false, error: message };
    }
  };

  // Connexion
  const login = async (email, password) => {
    try {
      setError(null);
      const response = await api.post('/auth/login', { email, password });

      const { token, user } = response.data;
      localStorage.setItem('token', token);
      setUser(user);
      
      return { success: true, user };
    } catch (err) {
      const message = err.response?.data?.message || 'Email ou mot de passe incorrect';
      setError(message);
      return { success: false, error: message };
    }
  };

  // Déconnexion
  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  // Vérifier les rôles
  const hasRole = (role) => {
    return user?.role === role;
  };

  const value = {
    user,
    loading,
    error,
    register,
    login,
    logout,
    hasRole,
    isAuthenticated: !!user,
    isAdmin: user?.role === 'admin'
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};