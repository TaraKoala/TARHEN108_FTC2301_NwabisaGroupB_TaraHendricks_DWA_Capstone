// import { Link } from 'react-router-dom';
// import starLogo from '.\src\assets\starLogo.png';


export default function Navbar() {
    return (
      <header className="header">
        <div className="site-title">
            <img src=".\src\assets\starLogo.png" width='60vw' alt="StarStream-Logo" />
            <h1 className="header--title">StarStream</h1>
        </div>
        <nav>
        <div className="navbar">
          <div className="container nav-container">
              <input className="checkbox" type="checkbox" name="" id="" />
              <div className="hamburger-lines">
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
              </div>  
            <div className="logo">
              <h1>Navbar</h1>
            </div>
            <div className="menu-items">
              <li><a href="#">Login/Sign up</a></li>
              <li><a href="#">Favourites</a></li>
              <li><a href="#">Watch history</a></li>
              <li><a href="#">Sign out</a></li>
            </div>
          </div>
        </div>
      </nav>
      </header>
    )
  }