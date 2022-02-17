import Navbar from './Navbar/Navbar';

const Header = () => {
    return (
      <header>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Вокруг жизни Германа Гессе.</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <Navbar />
          </div>
        </nav>
      </header>


    )
  } 

export default Header;