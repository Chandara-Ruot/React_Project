import { Link } from "react-router-dom";
import logo from "../assets/logoPNG.png";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Links = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Service",
    path: "service",
  },
  {
    label: "Accessories",
    path: "accessory",
  },
  {
    label: "About",
    path: "about",
  },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="nav-bar">
      <img src={logo} alt="myLogo" className="logo" />
      <button onClick={() => setIsOpen(!isOpen)} className="nav-toggle">
        {isOpen ? <X /> : <Menu />}
      </button>
      <ul className={isOpen ? "nav-lists active" : "nav-lists"}>
        {Links.map((link) => (
          <li
            onClick={() => setIsOpen(false)}
            className="nav-link"
            key={link.label}
          >
            <Link to={link.path}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
