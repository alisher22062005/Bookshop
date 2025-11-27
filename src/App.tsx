import Home from "./pages/Home/Home";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import LogIn from "./pages/LogIn/LogIn";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />{" "}
      </Routes>
    </>
  );
}

export default App;
