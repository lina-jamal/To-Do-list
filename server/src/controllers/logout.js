const logout = async (req, res, next) => {
  try {
    res
      .clearCookie("token")
      .json({ statusCode: 200, message: "logout success" });
  } catch (err) {
    next(err);
  }
};
module.exports = logout;
