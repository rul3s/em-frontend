import "./navbar.scss";
import { Menu } from "@mui/icons-material";
import { Link } from "react-router-dom";

interface Props {}

const Navbar = (props: Props) => {
  return (
    <div className="navbar">
      <div className="brand">Event Manager</div>
      <div className="hamburguer">
        <Menu />
      </div>
      <div className="menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/events">Events</Link>
          </li>
          <li>
            <Link to="/events/add">Add event</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
