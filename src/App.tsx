
import Header from "./Header";
import FirstPage from "./FirstPage";
import About from "./About";
import Services from "./Services";
import Projects from "./Projects";
import Achievements from "./Achievements";
import Contact from "./Contact";
import Connect from "./Connect";

function App() {
  return (
    <>
      <main className="bg-gray-900">
        <Header />
        <FirstPage />
        <About />
        <Services />
        <Projects />
        <Achievements />
        <Contact />
        <Connect />
      </main>
    </>
  );
}

export default App;
