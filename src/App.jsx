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
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div className="App">
      <Home />
      <ArticlesComponent id="particle" />
    </div>
  );
}

export default App;
