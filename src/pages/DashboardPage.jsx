import React from "react";

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
  return (
    <div>
      {/* <Dashboard /> */}
      <Link to={"/students"}>Go to students page</Link>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default DashboardPage;
