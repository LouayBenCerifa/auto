const jwt = require('jsonwebtoken');

exports.protect = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    
    if (!token) {
      return res.status(401).json({ 
        success: false,
        message: 'Non autorisé' 
      });
    }

    const decoded = jwt.verify(
      token, 
      process.env.JWT_SECRET || 'oceana_secret_key_2024'
    );
    
    req.user = decoded;
    next();
    
  } catch (error) {
    res.status(401).json({ 
      success: false,
      message: 'Token invalide' 
    });
  }
};

exports.adminOnly = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ 
      success: false,
      message: 'Accès interdit - Admin uniquement' 
    });
  }
  next();
};