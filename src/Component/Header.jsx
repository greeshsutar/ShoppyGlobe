import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/checkout", label: "Checkout" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/90 border-b border-slate-800 text-slate-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 group">
          <span className="text-xl sm:text-2xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-400 via-purple-400 to-amber-400 bg-clip-text text-transparent">
            ShoppyGlobe
          </span>
          <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-semibold bg-indigo-500/20 text-indigo-300 rounded-full border border-indigo-500/30 uppercase tracking-widest">
            v2.0
          </span>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `relative text-sm font-medium tracking-wide transition-colors py-1.5 ${
                  isActive ? "text-indigo-400" : "text-slate-300 hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>{label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
                  )}
                </>
              )}
            </NavLink>
          ))}

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `flex items-center gap-2 text-sm font-medium px-3 py-1.5 rounded-full ${
                isActive
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/25"
                  : "bg-slate-800 text-slate-200 hover:bg-slate-700"
              }`
            }
          >
            🛒 Cart
            {totalCount > 0 && (
              <span className="flex items-center justify-center min-w-[18px] h-[18px] text-[10px] font-bold bg-amber-500 text-slate-950 rounded-full px-1">
                {totalCount}
              </span>
            )}
          </NavLink>
        </nav>

        {/* Mobile: Cart icon + Hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          <NavLink to="/cart" className="flex items-center gap-1.5 bg-slate-800 text-slate-200 px-3 py-1.5 rounded-full text-sm">
            🛒
            {totalCount > 0 && (
              <span className="flex items-center justify-center min-w-[18px] h-[18px] text-[10px] font-bold bg-amber-500 text-slate-950 rounded-full px-1">
                {totalCount}
              </span>
            )}
          </NavLink>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800 px-4 pb-4 flex flex-col gap-1">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive ? "bg-indigo-600/20 text-indigo-400" : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;