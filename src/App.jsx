import Header from "./components/Header";
import Footer from "./components/Footer";
import HowWeMeet from "./components/HowWeMeet";
import Paragraph from "./components/Paragraph";
import "./Css/App.css";
import Hero from "./components/Hero";
function App() {
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
