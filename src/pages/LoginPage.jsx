import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFirebase } from "../context/Firebase";

function LoginPage() {
  const firebase = useFirebase();
  // console.log(firebase);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    if (firebase.isLoggedIn) {
      // navigate to home
      navigate("/");
    }
  }, [firebase, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("logging in");
    try {
      const result = await firebase.loginUserWithEmailAndPassword(
        email,
        password
      );
      console.log("login success", result);
    } catch (error) {
      console.log(error);
    }

    //   .then((value) => {
    //     alert("success");
    //     console.log("login success", result, value);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     alert(err.message);
    //   });

    // createUserWithEmailAndPassword(auth, email, password)
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <h1>OR</h1>
      <button onClick={firebase.signinWithGoogle}>Login with Google</button>
    </div>
  );
}

export default LoginPage;
