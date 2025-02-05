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
  };
  return (
    <div className=" w-[35vw] mt-5 rounded-xl shadow-xl m-auto flex flex-col items-center justify-center gap-6 py-8">
      <h1 className="text-2xl font-bold my-2">Login Page</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-[70%]">
        <label>Email:</label>
        <input
          type="email"
          placeholder="Enter Your Email Here"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-4 py-2 border rounded outline-0"
        />
        <label>Password:</label>
        <input
          type="password"
          placeholder="Enter Your Password Here"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="px-4 py-2 border w-full rounded outline-0"
        />
        <button
          type="submit"
          className="bg-blue-500 cursor-pointer px-4 py-2 text-white hover:bg-white hover:text-blue-500 border-2 rounded-lg mt-4"
        >
          Login
        </button>
      </form>
      <h1>OR</h1>
      <button
        onClick={firebase.signinWithGoogle}
        className="bg-red-500 cursor-pointer px-4 py-2 text-white hover:bg-white hover:text-red-500 border-2 rounded-lg"
      >
        Login with Google
      </button>
    </div>
  );
}

export default LoginPage;
