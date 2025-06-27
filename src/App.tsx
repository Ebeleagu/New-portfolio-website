import Header from "./Header";
import FirstPage from "./FirstPage";
import About from "./About";
import Services from "./Services";
import Projects from "./Projects";
import Achievements from "./Achievements";
import Contact from "./Contact";
import Connect from "./Connect";
import { Routes, Route } from "react-router-dom";
import Structure from "./Structure";

function App() {
  return (
    <>
      <main className="bg-gray-900">
        <Routes>
          <Route path="/" element={<Structure />}>
            <Route path="/" element={<FirstPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="*"
              element={<div className="text-white p-4">Page Not Found</div>}
            />

            {/* <Achievements />
            <Connect /> */}
          </Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
