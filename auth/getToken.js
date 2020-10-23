const jwt = require("jsonwebtoken");

function getToken(user) {
  const { type, username, id } = user
  const payload = { type, username, id, role: [type]};
  const secret = process.env.JWT_SECRET || "secret9x7yz";
  const options = { expiresIn: "1h" };
  return jwt.sign(payload, secret, options);
}

module.exports = getToken;