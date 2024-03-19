import Header from "./components/Header";
import Footer from "./components/Footer";
import HowWeMeet from "./components/HowWeMeet";
import Paragraph from "./components/Paragraph";
import "./Css/App.css";
import Hero from "./components/Hero";
import ScrollReveal from "scrollreveal";
import { useState, useEffect } from "react";


function App() {
  const [toggle, setToggle] = useState(true);
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "65px",
      duration: 1500,
      reset: true,
    });
    sr.reveal(
      `#footer,
      #home,
      #header,
      #hwm,
      #p`, {
      opacity: 0,

    }
    );
  }, []);
  return (

    <div>
      <Header />
      <main className="main">
        <Hero />
        <HowWeMeet />
        <Paragraph />
      </main>
      <Footer />
    </div>
  )
}

export default App
