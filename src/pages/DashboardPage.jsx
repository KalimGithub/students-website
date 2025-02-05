import React, { useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

import { useFirebase } from "../context/Firebase";
import { Link, useNavigate } from "react-router-dom";

function DashboardPage() {
  const firebase = useFirebase();
  const navigate = useNavigate();
  // console.log(firebase);
  const handleLogout = () => {
    firebase.signOutUser();
    navigate("/login");
  };

  useEffect(() => {
    if (!firebase.isLoggedIn) {
      // navigate to home
      navigate("/login");
    }
  }, [firebase, navigate]);
  return (
    <div className="flex flex-col items-center justify-center">
      <h3 className="text-xl my-4">Hi, Welcome back 👋</h3>
      <h1 className="text-4xl mb-6">
        Welcome to the students Details Dashboard
      </h1>
      <p className="text-xl mb-4  text-start">
        Where You can add edit and delete student information
      </p>
      <div className="mt-8 flex justify-center items-center">
        <DotLottieReact
          src="https://lottie.host/eda1f700-4761-4e32-b0f7-67c1d9ac465a/aOlXyfGuav.lottie"
          loop
          autoplay
        />
      </div>
      <div className="flex justify-center items-center gap-12 mt-18">
        <Link
          to={"/students"}
          className="bg-blue-500 px-6 py-2 text-white cursor-pointer rounded-lg hover:text-blue-500 hover:bg-white transition-all ease-in-out border-2 font-semibold"
        >
          Go to students page
        </Link>
        <button
          className="bg-blue-500 px-6 py-2 text-white cursor-pointer rounded-lg hover:text-blue-500 hover:bg-white transition-all ease-in-out border-2 font-semibold min-w-[200px]"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default DashboardPage;
