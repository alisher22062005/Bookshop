import Home from "./pages/Home/Home";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import LogIn from "./pages/LogIn/LogIn";
import BookDescribtion from "./shared/BookDescribtion";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/books/:id" element={<BookDescribtion />} />
      </Routes>
    </>
  );
}

export default App;
