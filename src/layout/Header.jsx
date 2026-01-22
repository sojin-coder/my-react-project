import React, { useState } from "react";
import { Home, User, Settings, Mail, Info, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);

  // ១. ដាក់ទិន្នន័យម៉ឺនុយក្នុង Array
  const menus = [
    { name: "Home", to: "/", icon: <Home size={20} /> },
    { name: "About", to: "/about", icon: <User size={20} /> },
    { name: "Services", to: "/services", icon: <Settings size={20} /> },
    { name: "Contact", to: "/contact", icon: <Mail size={20} /> },
    { name: "Info", to: "/info", icon: <Info size={20} /> },
  ];

  return (
    <nav className="shadow-md bg-white fixed w-full z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center h-16 px-4">
        
        {/* LOGO */}
        <img src="https://etec-system.42web.io/assets/etec.png" className="w-16" alt="Logo" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 font-medium">
          {menus.map((m) => (
            <li key={m.name}>
              <Link to={m.to} className="flex items-center gap-2 hover:text-blue-600 transition">
                {m.icon} {m.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Toggle Button (Mobile) */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t py-4">
          {menus.map((m) => (
            <Link
              key={m.name}
              to={m.to}
              onClick={() => setOpen(false)}
              className="flex items-center gap-4 px-6 py-3 hover:bg-blue-50"
            >
              {m.icon} {m.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Header;