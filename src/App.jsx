import { useState } from "react";
import { LoadingScreen } from "./components/LoadingScreen";
import "./App.css";
import "./index.css";
import { Navbar } from "./Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/section/Home";
import { About } from "./components/section/About";
import { Skills } from "./components/section/Skills";
import { Experience } from "./components/section/Experience";
import { Project } from "./components/section/Project";
import { CodingActivity } from "./components/section/CodingActivity";
import { Achievements } from "./components/section/Achievements";
import { Certifications } from "./components/section/Certifications";
import { Contact } from "./components/section/Contact";
import { Footer } from "./components/Footer";

function App() {
  const [isLoaded, setLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setLoaded(true)} />}

      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-[#f6f7fb] text-[#12151f]`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        <Home />
        <About />
        <Skills />
        <Experience />
        <Project />
        <CodingActivity />
        <Achievements />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
