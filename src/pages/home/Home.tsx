import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

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
