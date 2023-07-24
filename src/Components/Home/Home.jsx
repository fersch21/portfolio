import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Projects from "../Projects/Projects";
// import Team from "../Team/Team";
import Website from "../Website/Website";
import "./Home.css";
import { AnimatePresence, } from "framer-motion";

const Home = () => {
  return (
    <div>
      <div className="banner"></div>
      <div className="contents">
        <Header />

        <section className="website">
          <Website />
          {/* <Team /> */}
          <AnimatePresence>
            <Projects />
          </AnimatePresence>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
