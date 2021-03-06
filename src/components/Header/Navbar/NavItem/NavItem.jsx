import { NavLink } from "react-router-dom";

const NavItem = (props) => {
  return (
    <li className="nav-item">
      <NavLink to={props.link} className="nav-link ">
        {props.text}
      </NavLink>
    </li>
  )
}

export default NavItem;