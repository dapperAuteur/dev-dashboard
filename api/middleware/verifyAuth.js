const jwt = require('jsonwebtoken');

function verifyAuth(req, res, next) {
  const token = req.header('user-auth-token');
  if (!token) return res.status(401).json('Access denied. No token provided.');

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded;
    req.token = token;
    next();
  } catch (ex) {
    res.status(400).json('Invalid token.');
  }
}

module.exports = verifyAuth;
