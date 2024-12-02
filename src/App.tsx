import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Hero } from "./components/Hero";

function App() {
  return (
    <>
      <main>
        <section className="relative" id="home">
          <Header />
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="contact">
          <Footer />
        </section>
      </main>
    </>
  );
}

export default App;
