import { useState, useEffect } from "react";
import { FiMenu, FiX, FiSearch, FiShoppingCart } from "react-icons/fi";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) setIsScrolled(true);
      else setIsScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
         top-0 left-0 w-full z-50 transition-all duration-300 
        ${isScrolled ? "fixed bg-white shadow-md" : "bg-transparent"}
      `}
    >
      <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-3xl font-serif text-green-700 playwrite-au-tas-wedding">Shubhmangal</h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 font-semibold">
          <li><a href="#" className="text-black hover:text-green-700">HOME</a></li>
          <li><a href="#" className="text-black hover:text-green-700">COUPLE</a></li>
          <li><a href="#" className="text-black hover:text-green-700">STORY</a></li>
          <li><a href="#" className="text-black hover:text-green-700">RSVP</a></li>
          <li><a href="#" className="text-black hover:text-green-700">EVENTS</a></li>
          <li><a href="#" className="text-black hover:text-green-700">BLOG</a></li>
        </ul>

        {/* Icons */}
        <div className="w-50">
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX color="black"/> : <FiMenu color="black"/>}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col text-center py-4 space-y-4 font-semibold">
            <li><a href="#" className="text-black hover:text-green-700">HOME</a></li>
            <li><a href="#" className="text-black hover:text-green-700">COUPLE</a></li>
            <li><a href="#" className="text-black hover:text-green-700">STORY</a></li>
            <li><a href="#" className="text-black hover:text-green-700">RSVP</a></li>
            <li><a href="#" className="text-black hover:text-green-700">EVENTS</a></li>
            <li><a href="#" className="text-black hover:text-green-700">BLOG</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
