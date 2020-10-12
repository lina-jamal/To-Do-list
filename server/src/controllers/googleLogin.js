const { signToken, verifyGoogleToken } = require("../utils");

const googleLogin = async (req, res, next) => {
  try {
    const { tokenId } = req.body;
    let payload;
    const { name, googleId } = await verifyGoogleToken(tokenId);

    payload = { userId: googleId, name };

    const token = await signToken(payload);
    return res
      .cookie("token", token)
      .json({ statusCode: 200, message: "logged in successfully" });
  } catch (err) {
    return next(err);
  }
};

module.exports = googleLogin;
