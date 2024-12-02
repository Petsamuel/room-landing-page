import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Hero } from "./components/Hero";
import React, { useState } from "react";
const App: React.FC = () => {
  const [shop, setShop] = useState<boolean>(false);

  return (
    <>
      <main>
        <section className="relative" id="home">
          <Header shop={(val) => setShop(val)} />
          <Hero shopToggle={shop} setToggleShop={(val) => setShop(val)} />
        </section>

        {!shop && (
          <section id="about">
            <About />
          </section>
        )}

        <section id="contact">
          <Footer />
        </section>
      </main>
    </>
  );
};

export default App;
