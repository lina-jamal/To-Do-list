const axios = require("axios");
const { sign } = require("jsonwebtoken");
require("env2")("config.env");

const googleLogin = async (req, res, next) => {
  try {
    const { tokenId, googleId } = req.body;

    // request user details:
    const idInfo = await axios.get(
      `https://oauth2.googleapis.com/tokeninfo?id_token=${tokenId}`
    );

    const { name } = idInfo.data;
    const token = sign({ userId: googleId, name }, process.env.SECRET_KEY);
    res.cookie("token", token);
    res.end();
  } catch (err) {
    next(err);
  }
};

module.exports = googleLogin;
