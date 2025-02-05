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
    <div className=" w-[35vw] mt-5 rounded-xl shadow-xl m-auto flex flex-col items-center justify-center gap-6 py-8">
      <h1 className="text-2xl font-bold my-2">Register Users</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-[70%]">
        <label>Email:</label>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-4 py-2 border rounded outline-0"
          required
        />
        <label>Password:</label>
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="px-4 py-2 border rounded outline-0"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 cursor-pointer px-4 py-2 text-white hover:bg-white hover:text-blue-500 border-2 rounded-lg mt-4"
        >
          Signup
        </button>
      </form>
    </div>
  );
}

export default RegisterPage;
