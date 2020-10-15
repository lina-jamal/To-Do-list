import React from "react";
import { GoogleLogin } from "react-google-login";

const axios = require("axios");
function Login({ setAuth }) {
  const failureResponse = (response) => {
    console.log("error", response);
  };
  const successResponse = async (res) => {
    const { tokenId, googleId } = res;
    try {
      await axios.post("/api/v1/login/google", { tokenId, googleId });
      setAuth(true);
    } catch ({ response }) {
      console.log(response);
    }
  };

  return (
    <div className="login">
      <GoogleLogin
        clientId="423453055240-bpk4pljv8dtkfvstias9526fsvv4pep0.apps.googleusercontent.com"
        buttonText="Login Using Google"
        onSuccess={successResponse}
        onFailure={failureResponse}
        cookiePolicy="single_host_origin"
        className="login-btn"
        isSignedIn
      />
    </div>
  );
}

export default Login;
