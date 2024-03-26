const jwt = require("jsonwebtoken");
const config= require("../config/config")

function authenticateToken(req, res, next) {
  // Get the token from the Authorization header
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1]; // Bearer TOKEN

  if (token == null) {
    return res.sendStatus(401); // No token provided
  }

  jwt.verify(token, config.jwtSecret, (err, user) => {
    console.log(token)
    if (err) {
      return res.sendStatus(403); // Invalid token
    }

    req.user = user;
    next(); // Proceed to the next middleware or route handler
  });
}

module.exports = authenticateToken;