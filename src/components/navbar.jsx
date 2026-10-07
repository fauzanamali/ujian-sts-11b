import { NavLink } from "react-router";

const Navbar = () => {
  const navClass = ({ isActive }) =>
    `px-4 py-2 rounded-lg font-medium transition ${
      isActive
        ? "bg-black text-white"
        : "text-gray-700 hover:bg-gray-100"
    }`;

  return (
    <nav className="border-b bg-white shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold text-gray-900">
          Logo
        </h1>

        <div className="flex gap-2">
          <NavLink to="/" className={navClass}>
            Home
          </NavLink>

          <NavLink to="/about" className={navClass}>
            About
          </NavLink>

            <NavLink to="/testimony" className={navClass}>
            Testimony
          </NavLink>

            <NavLink to="/faq" className={navClass}>
            FAQ
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;