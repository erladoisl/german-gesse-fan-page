import c from './Navbar.module.css'
import NavItem from './NavItem/NavItem';

const Navbar = () => {
  const navlinks = [
            {'link': '/', 'text': 'Главная'},
            {'link': '/reviews', 'text': 'Рецензии'},
            {'link': '/gallery', 'text': 'Галерея'},
            {'link': '/dialogs', 'text': 'Чат'},
            {'link': '/books', 'text': 'Книги'},
            {'link': '/store', 'text': 'Магазинчик'}]

  return (
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <ul class="navbar-nav me-auto mb-2 mb-md-0">
        {navlinks.map((item) => {
          return <NavItem link={item.link} activeClassName={c.active} text={item.text}/>
        })}
      </ul>
    </div>
  )
}

export default Navbar;