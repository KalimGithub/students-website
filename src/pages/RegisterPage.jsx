import React, { useEffect, useState } from "react";
import { app } from "../firebase";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useFirebase } from "../context/Firebase";
const auth = getAuth(app);

function RegisterPage() {
  const firebase = useFirebase();
  const navigate = useNavigate();
  // console.log(firebase);

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
    console.log("signing in");
    const result = await firebase.signUpUserWithEmailAndPassword(
      email,
      password
    );
    console.log("signup success", result);
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
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default RegisterPage;
