import { Routes, Route } from "react-router-dom";
import StudentsPage from "./pages/StudentsPage";
import Dashboard from "./pages/DashboardPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import { app } from "./firebase";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// const auth = getAuth(app);
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/students" element={<StudentsPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
