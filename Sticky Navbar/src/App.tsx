import React from "react";
import HeroSection from "./components/HeroSection";
import MainSection from "./components/MainSection";
import StickyNav from "./components/StickyNav";

function App() {
  return (
    <>
      <StickyNav />
      <HeroSection />
      <MainSection />
    </>
  );
}

export default App;
