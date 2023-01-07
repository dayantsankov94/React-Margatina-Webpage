import { Route, Routes } from "react-router-dom";
import About from "./Components/About/About";
import Activities from "./Components/Activities/Activities";
import Contacts from "./Components/Contacts/Contacts";
import Footer from "./Components/Footer/Footer";
import Gallery from "./Components/Gallery/Gallery";
import Home from "./Components/Home/Home";
import Location from "./Components/Home/Location/Location";
import Surroundings from "./Components/Home/Surroundings/Surroundings";
import Nabvar from "./Components/Navbar/Navbar";



function App() {
  return (
    <>
      <Nabvar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/surroundings" element={<Surroundings />} />
          <Route path="/location" element={<Location />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
