import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Workshops from "./pages/Workshops.jsx";
import Therapy from "./pages/Therapy.jsx";
import Testimonials from "./pages/Testimonials.jsx";
import Articles from "./pages/Articles.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/workshops" element={<Workshops />} />
        <Route path="/therapy" element={<Therapy />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
}

export default App;
