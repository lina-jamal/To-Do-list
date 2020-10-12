const { verifyToken } = require("../utils");

const Auth = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    const userData = await verifyToken(token);

    req.userData = userData;
    console.log(userData, 4444);
    return next();
  } catch (err) {
    if (err.message === "jwt must be provided") {
      const errResponse = () => ({
        statusCode: 403,
        error: "Forbidden",
        message: "you need to login first to access this resource",
      });

      return res.status(403).json(errResponse);
    }
    return next(err);
  }
};

module.exports = Auth;
