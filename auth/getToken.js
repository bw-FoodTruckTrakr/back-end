const jwt = require("jsonwebtoken");

function getToken(user) {
  console.log(user)
  const { type, username, id } = user
  const secret = process.env.JWT_SECRET || "secret";
  const payload = { type, username, id, role: [type]};
  const options = { expiresIn: "1h" };
  return jwt.sign(payload, secret, options);
}

module.exports = getToken;