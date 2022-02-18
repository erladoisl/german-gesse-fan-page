import Navbar from './Navbar/Navbar';

const Header = (props) => {
    return (
      <header>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <div className="container-fluid">
            <div className="navbar-brand">Вокруг жизни Германа Гессе.</div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <Navbar navlinks = {props.navlinks}/>
          </div>
        </nav>
      </header>


    )
  } 

export default Header;