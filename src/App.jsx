import "./App.css";
import React, { useEffect } from "react";
import Home from "./Components/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";

// fade slide---------------
import Aos from "aos";
import "aos/dist/aos.css";
import ArticlesComponent from "./Components/particles/particlecomponents";

function App() {
  // fade slide---------------
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="App">
      <ArticlesComponent id="particle"/> 
      <Home />
    </div>
  );
}

export default App;
