import React from "react";
import { GoogleLogin } from "react-google-login";
import "./style.css";
const axios = require("axios");

function Login({ setAuth, setName }) {
  const failureResponse = (response) => {
    console.log("error", response);
  };
  const successResponse = async (res) => {
    const { tokenId, googleId, profileObj } = res;

    try {
      const response = await axios.post("/api/v1/login/google", {
        tokenId,
        googleId,
      });
      const { name } = response.data.payload;
      setName(name);
      setAuth(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="login">
      <div className=" paragraph">
        <br></br>
        <p>Do you want to have an organized day</p>
        <br></br>
        <p>Lets Login First</p>
      </div>
      <GoogleLogin
        clientId="423453055240-bpk4pljv8dtkfvstias9526fsvv4pep0.apps.googleusercontent.com"
        buttonText="Login Using Google"
        // render={(renderProps) => (
        //   <button
        //     className="google-btn"
        //     onClick={renderProps.onClick}
        //     disabled={renderProps.disabled}
        //   >
        //     Login
        //   </button>
        // )}
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
