import FirstPage from "./FirstPage";
import About from "./About";
import Services from "./Services";
import Projects from "./Projects";
import Contact from "./Contact";
import Connect from "./Connect";
import Header from "./Header";
import Achievements from "./Achievements";
import "./App.css";

function App() {
  return (
    <main className="bg-gray-900">
      <div className="fixed z-50 bg-gray-900 w-[100%] mb-10">
        <Header />
      </div>
      <div>
        <FirstPage />
        <About />
        <Services />
        <Projects />
        <Achievements />
        <Contact />
        <Connect />
      </div>
    </main>
  );
}

export default App;
