import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import Services from "./pages/Services";
import AllergyAdvised from "./pages/AllergyAdvised";
import Navigation from "./NavBar/Navigation";

function App() {
  return (
    <div>

      <Navigation/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/services" element={<Services />} />
        <Route path="/allergyAdvised" element={<AllergyAdvised />} />
      </Routes>
    </div>
  );
}

export default App;
