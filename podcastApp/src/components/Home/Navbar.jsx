// import Sort from ".src/components/sort"
import Menu from "./Menu"

export default function Navbar() {
    return (
      <header className="header">
        <div className="site-title">
            <img src=".\src\assets\starLogo.png" width='60vw' alt="StarStream-Logo" />
            <h1 className="header-title">StarStream</h1>
        </div>
        <nav>
        <div className="navbar">
        <button><img src="./src/assets/search.png"></img></button>
          <div className="container nav-container">
            <input className="checkbox" type="checkbox" name="" id="" />
            <div className='menu' onClick={Menu}></div>
            <div className="hamburger-lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </div>  
          </div>
        </div>
      </nav>
      </header>
    )
  }

  // export default function Card ({title,image,season,genre,lastUpdated,handleShow}){
  //   return(  
  //     <div className='card' onClick={handleShow}>
  //         <img className='card-image' src={image} />
  //       <section>
  //         <h3 className="card-title">{title}</h3>
  //         <div className='card-info'>
  //           <h4>{season} seasons</h4>
  //           <h4>Genres: {genre} </h4>
  //           <h4>Last-updated: <small>{lastUpdated}</small> </h4>
  //         </div>
  //       </section>
  //     </div>
  //     )
  //     }
