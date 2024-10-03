import "./App.css";
import About from "./components/About";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Learn from "./components/Learn";

import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="body-div">
      <Navbar />
      <Hero/>
      <Features/>
      <Learn/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
