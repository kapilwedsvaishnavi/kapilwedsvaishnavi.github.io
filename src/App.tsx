import Header from './componants/Header';
import CountdownTimer from './componants/CountdownTimer';
import Couple from './componants/Couple';
import OurStory from './componants/OurStory';
import Rsvp from './componants/Rsvp';
import Event from './componants/Event';
import Footer from './componants/Footer';
import { useState, useEffect } from 'react';
import FallingPetals from './ui/FallingPetals';
import { isMarriageDone } from './helper/isMarraigeDone';

function App() {
  // hard-coded initial value
  const [curLang, setCurLang] = useState<"en" | "mr">("en");

  // load saved lang from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("app_lang") as "en" | "mr" | null;
    if (saved) setCurLang(saved);
  }, []);

  // toggle function
  const toggleLang = () => {
    const next = curLang === "en" ? "mr" : "en";
    setCurLang(next);
    localStorage.setItem("app_lang", next);
    window.location.reload();
  };

  return (
    <main className="App">
      <Header />
      <FallingPetals />
      <CountdownTimer />
      <Couple />
      <OurStory />
      {isMarriageDone() ? null :
        <>
          <Rsvp />
          <Event />
        </>}
      <Footer />

      <button
        onClick={toggleLang}
        className="
                  fixed bottom-4 right-4
                  px-4 py-2
                  rounded-full
                  bg-white/30 backdrop-blur-md
                  shadow-lg shadow-black/20
                  border border-white/40
                  text-sm font-semibold
                  text-gray-800
                  hover:bg-white/40
                  transition-all duration-
                  cursor-pointer
                  z-20
                  hidden
                "
      >
        {curLang.toUpperCase()}
      </button>
    </main>
  )
}

export default App
