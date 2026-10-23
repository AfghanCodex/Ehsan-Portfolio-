import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Process from "./components/Process";
import Services from "./components/Services";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import Skills from "./components/Skills";

function getInitialTheme() {
  try {
    const savedTheme = window.localStorage.getItem("ehsan-portfolio-theme");
    return savedTheme === "dark" ? "dark" : "light";
  } catch {
    return "light";
  }
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    try {
      window.localStorage.setItem("ehsan-portfolio-theme", theme);
    } catch {
      // The theme still works for this visit when browser storage is unavailable.
    }
  }, [theme]);

  function toggleTheme() {
    setTheme((currentTheme) => currentTheme === "light" ? "dark" : "light");
  }

  return (
    <div className="portfolio" data-theme={theme}>
      <SiteHeader theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Process />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}

export default App;
