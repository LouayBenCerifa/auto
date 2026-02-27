const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const authRoutes = require('./routes/auth');

const app = express();

// Middleware
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());

// Connexion MongoDB
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
  console.log('✅ MongoDB connecté');
  createDefaultAdmin();
})
.catch(err => console.error('❌ Erreur MongoDB:', err));

// Routes
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.json({
    message: 'API OCEANA - Documentation',
    endpoints: {
      test: '/api/test',
      register: '/api/auth/register (POST)',
      login: '/api/auth/login (POST)',
      me: '/api/auth/me (GET)'
    }
  });
});

app.get('/api/test', (req, res) => {
  res.json({ message: 'API fonctionne !' });
});

const createDefaultAdmin = async () => {
  try {
    const User = require('./models/User');
    const bcrypt = require('bcryptjs');
    
    const adminExists = await User.findOne({ email: 'admin@oceana.com' });
    
    if (!adminExists) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash('admin123', salt);
      
      await User.create({
        email: 'admin@oceana.com',
        password: hashedPassword,
        firstName: 'Admin',
        lastName: 'OCEANA',
        role: 'admin'
      });
      
      console.log('✅ Admin créé: admin@oceana.com / admin123');
    }
  } catch (error) {
    console.error('❌ Erreur création admin:', error.message);
  }
};

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`);
});