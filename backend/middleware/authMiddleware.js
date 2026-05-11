const jwt = require("jsonwebtoken");

exports.protect = (req, res, next) => {

  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "Not authorized" });
  }

  const token = authHeader.split(" ")[1];

  try {

    const decoded = jwt.verify(token, "SECRET_KEY");

    req.user = decoded;

    next();

  } catch (error) {

    res.status(401).json({ message: "Invalid token" });

  }

};

exports.admin = (req, res, next) => {

  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Admin only" });
  }

  next();

};