import { Routes, Route } from "react-router-dom";
import FirstPage from "./FirstPage";
import About from "./About";
import Services from "./Services";
import Projects from "./Projects";
import Contact from "./Contact";
import Structure from "./Structure";

function App() {
  return (
    <main className="bg-gray-900">
      <Routes>
        <Route path="/" element={<Structure />}>
          <Route index element={<FirstPage />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route
            path="*"
            element={<div className="text-white p-4">Page Not Found</div>}
          />
        </Route>
        {/* Optional: if you want first page standalone outside Structure */}
        {/* <Route path="/firstpage" element={<FirstPage />} /> */}
      </Routes>
    </main>
  );
}

export default App;
