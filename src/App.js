import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Registry, Contact } from "./layout";
import { Navbar, Footer } from "./components";

import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <Router>
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registry" element={<Registry />} />
          <Route path="/rsvp" element={<Contact />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </Router>
  );
}

export default App;
