import About from "./About";
import Education from "./Education";
import Experience from "./Experience";
import Footer from "./Footer";
import Header from "./Header";
import Projects from "./Projects";
import Skills from "./Skills";

function Home() {
  return (
    <>
      <Header />

      <main>
        <About />
        <Experience />
        <Skills />
        <Education />
        <Projects />
      </main>

      <Footer />
    </>
  );
}

export default Home;
