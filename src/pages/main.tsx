import Bg from "../components/background";
import Header from "../components/main/header/header";
import About from "../components/main/about/about";
import Studies from "../components/main/studies/studies";
import Projects from "../components/main/projects/projects";
import Contact from "../components/main/contact/contact";
import Skills from "../components/main/skills/skills";
import { ThemeProvider } from "../hooks/ThemeContext";
import { useEffect } from "react";

function mainApp() {
  let isScrolling = false;

  document.addEventListener(
    "wheel",
    (e) => {
      e.preventDefault();
      if (isScrolling) return;
      isScrolling = true;
      const vh = window.innerHeight;
      const direction = Math.sign(e.deltaY);
      const currentPosition = window.scrollY;
      const nextPosition = currentPosition + vh * direction;
      window.scrollTo({
        top: nextPosition,
        behavior: "smooth",
      });
      setTimeout(() => {
        isScrolling = false;
      }, 1350);
    },
    { passive: false }
  );

  function setDark() {
    const isDark = localStorage.getItem("darkMode");
    if (isDark != "true") {
      document.getElementById("mainRoot")?.classList.remove("dark");
    }
    //localStorage.clear();
  }

  useEffect(() => {
    setDark();
  });

  return (
    <ThemeProvider>
      <div className="dark" id="mainRoot">
        <Bg id="about">
          <div className="sections lg:grid lg:items-center lg:h-full lg:grid-rows-[auto_1fr]">
            <Header menuId="1"></Header>
            <About></About>
          </div>
        </Bg>
        <Bg id="studies">
          <div className="sections">
            <Header menuId="2"></Header>
            <Studies></Studies>
          </div>
        </Bg>
        <Bg id="skills">
          <div className="sections">
            <Header menuId="3"></Header>
            <Skills></Skills>
          </div>
        </Bg>
        <Bg id="projects">
          <div className="sections">
            <Header menuId="4"></Header>
            <Projects></Projects>
          </div>
        </Bg>
        <Bg id="contact">
          <div className="sections">
            <Header menuId="5"></Header>
            <Contact></Contact>
          </div>
        </Bg>
      </div>
    </ThemeProvider>
  );
}

export default mainApp;
