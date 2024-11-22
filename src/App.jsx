import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import News from "./pages/News";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<About />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </>
  );
};

export default App;
