import React, { useState } from "react";
import { Home, User, Settings, Mail, Info, Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom"; // ប្តូរពី Link មក NavLink

const Header = () => {
  const [open, setOpen] = useState(false);

  const menus = [
    { name: "Home", to: "/", icon: <Home size={20} /> },
    { name: "About", to: "/about", icon: <User size={20} /> },
    { name: "Services", to: "/services", icon: <Settings size={20} /> },
    { name: "Contact", to: "/contact", icon: <Mail size={20} /> },
    { name: "Info", to: "/info", icon: <Info size={20} /> },
  ];

  // បង្កើត function សម្រាប់កំណត់ Style ពេលវា Active
  const activeClass = ({ isActive }) => 
    `flex items-center gap-2 transition ${isActive ? "text-blue-600 font-bold" : "text-slate-600 hover:text-blue-600"}`;

  const mobileActiveClass = ({ isActive }) => 
    `flex items-center gap-4 px-6 py-3 transition ${isActive ? "bg-blue-50 text-blue-600 font-bold border-l-4 border-blue-600" : "text-slate-600 hover:bg-blue-50"}`;

  return (
    <nav className="shadow-md bg-white fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-16 px-4">
        
        {/* LOGO */}
        <img src="https://etec-system.42web.io/assets/etec.png" className="w-16" alt="Logo" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium">
          {menus.map((m) => (
            <li key={m.name}>
              <NavLink to={m.to} className={activeClass}>
                {m.icon} <span>{m.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Toggle Button (Mobile) */}
        <button className="md:hidden text-slate-600" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t py-4 shadow-inner">
          {menus.map((m) => (
            <NavLink
              key={m.name}
              to={m.to}
              onClick={() => setOpen(false)}
              className={mobileActiveClass}
            >
              {m.icon} {m.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Header;