import Home from "./pages/Home/Home";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import LogIn from "./pages/LogIn/LogIn";
import BookDescribtion from "./shared/BookDescribtion";
import LoginPage from "./pages/LogIn/LogIn";
import SignUp from "./pages/SingUp/SingUp";
import Profile from "./pages/Profile/Profile";
import About from "./pages/About/About";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/books/:id" element={<BookDescribtion />} />
        <Route path="/logIn" element={<LoginPage />} />
        <Route path="/singUp" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
