import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import AvatarInteraction from "./pages/AvatarInteraction.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/avatar-interaction" element={<AvatarInteraction />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
