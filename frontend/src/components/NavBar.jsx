import { NavLink } from "react-router-dom";
import "../styles/navbar.css";
const Navbar = () => {
  return (
    <nav id="navbar">
      <h2>Party Time!</h2>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Minhas Festas
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/party/new"
            className={({ isActive }) => (isActive ? "btn active" : "btn")}
          >
            Criar Festa
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
