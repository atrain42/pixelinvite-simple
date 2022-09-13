import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { useEffect, useState } from "react";
import { Home, Registry, Contact } from "./layout";
import { Navbar, Footer, FormLoader } from "./components";

import { AnimatePresence } from "framer-motion";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [formLoader, setFormLoader] = useState(false);
  return (
    <Router>
      {formLoader && <FormLoader />}
      <ScrollToTop />
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registry" element={<Registry />} />
          <Route
            path="/rsvp"
            element={<Contact setFormLoader={setFormLoader} />}
          />
        </Routes>
      </AnimatePresence>
      <Footer />
    </Router>
  );
}

export default App;
