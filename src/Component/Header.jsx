import { NavLink } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
const Header = () => {
  return (
    <nav className="bg-black text-white px-6 py-4 shadow-md">
      <div className="flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-yellow-400">
          ShoppyGlobe
        </h1>

        {/* Links */}
        <div className="flex gap-6 text-lg">
          <NavLink 
            to="/" 
            className={({ isActive }) =>
              isActive ? "text-yellow-400" : "hover:text-gray-300"
            }
          >
            Home
          </NavLink>
         
          <NavLink
            to="/cart"
             
            className={({ isActive }) =>
              isActive ? "text-yellow-400" : "hover:text-gray-300"
            }
          ><BsCart4/>
            Cart
          </NavLink>
          <NavLink 
            to="/products"
            className={({ isActive }) =>
              isActive ? "text-yellow-400" : "hover:text-gray-300"
            }
          >
            Products
          </NavLink>

          <NavLink 
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-yellow-400" : "hover:text-gray-300"
            }
          >
            About
          </NavLink>
        </div>

      </div>
    </nav>
  );
};

export default Header;