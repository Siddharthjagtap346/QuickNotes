const jwt = require('jsonwebtoken');
const SECRET = 'quicknotes_secret_key';

module.exports = function (req, res, next) {
  const authHeader = req.header('Authorization');

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ msg: 'No token, access denied' });
  }

  const token = authHeader.split(' ')[1]; // ✅ Extract actual token

  try {
    const verified = jwt.verify(token, SECRET);
    req.user = verified.id;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
