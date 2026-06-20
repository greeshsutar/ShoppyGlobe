import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/90 border-b border-slate-800 text-slate-100 px-6 py-4 shadow-sm transition-all duration-300">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <NavLink to="/" className="flex items-center gap-2 group">
          <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-400 via-purple-400 to-amber-400 bg-clip-text text-transparent group-hover:opacity-90 transition">
            ShoppyGlobe
          </span>
          <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-semibold bg-indigo-500/20 text-indigo-300 rounded-full border border-indigo-500/30 uppercase tracking-widest">
            v2.0
          </span>
        </NavLink>

        <nav className="flex items-center gap-6 md:gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `relative text-sm font-medium tracking-wide transition-colors py-1.5 ${
                isActive
                  ? "text-indigo-400"
                  : "text-slate-300 hover:text-white"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <span>Home</span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
                )}
              </>
            )}
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `relative text-sm font-medium tracking-wide transition-colors py-1.5 ${
                isActive
                  ? "text-indigo-400"
                  : "text-slate-300 hover:text-white"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <span>About</span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
                )}
              </>
            )}
          </NavLink>

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `relative flex items-center gap-2 text-sm font-medium tracking-wide transition-all px-3 py-1.5 rounded-full ${
                isActive
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/25"
                  : "bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white"
              }`
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
            <span>Cart</span>
            {totalCount > 0 && (
              <span className="flex items-center justify-center min-w-[18px] h-[18px] text-[10px] font-bold bg-amber-500 text-slate-950 rounded-full px-1">
                {totalCount}
              </span>
            )}
          </NavLink>

          <NavLink
            to="/checkout"
            className={({ isActive }) =>
              `relative text-sm font-medium tracking-wide transition-colors py-1.5 ${
                isActive
                  ? "text-indigo-400"
                  : "text-slate-300 hover:text-white"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <span>Checkout</span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
                )}
              </>
            )}
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;


