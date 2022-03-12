import c from './Navbar.module.css'
import NavItem from './NavItem/NavItem';

const Navbar = (props) => {
  return (
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <ul className="navbar-nav me-auto mb-2 mb-md-0">
        {props.navlinks.map((item, index) => {
          return <NavItem link={item.link} activeClassName={c.active} text={item.text}  key={`NavItem_${index}`}/>
        })}
        <li className="nav-item">
          <a className="nav-link" href="https://www.youtube.com/playlist?list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8">React</a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar;