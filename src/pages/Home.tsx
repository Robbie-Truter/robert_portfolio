import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <main className="grow w-full">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Testimonials />
      <Footer />
    </main>
  );
};

export default Home;
