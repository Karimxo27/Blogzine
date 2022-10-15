/* eslint-disable jsx-a11y/anchor-is-valid */
import {Link} from "react-router-dom";
import J from "../images/blog.svg"
function Navbar (){
    return <div className="container">
        <nav class="navbar navbar-expand-lg prenav">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link" to="/">About</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/">Forum</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/buy">Buy Now</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/login">Login/join</Link>
        </li>
        <div className="navicon">
       <Link> <i class="bi bi-facebook"></i></Link> <Link><i class="bi bi-twitter"></i></Link> <Link><i class="bi bi-youtube"></i></Link> <Link><i class="bi bi-linkedin"></i></Link>
        </div>
        
       
    
      </ul>
     
    </div>
  </div>
</nav>
<hr/>
    <div>
    <nav class="navbar navbar-expand-lg nevo">
  <div class="container-fluid">
    <Link class="navbar-brand" to="#"><img src={J}/></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/">Pages</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/">Posts</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link " to="/">Lifestyle</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link " to="/">Dashboard</Link>
        </li>
      </ul>
    </div>
  </div>
  <button className="subbut">Subscribe!</button>
  <i class="bi bi-search"></i> <i class="bi bi-list-columns"></i>
</nav>
    
    </div>

    <div className="trending">
      <div className="trendtxt"> <h6> Trending:</h6>
     </div>
     <p>The most common busniess debase adeny yaba aloo</p>
     <i class="bi bi-arrow-left-circle"></i> <i class="bi bi-arrow-right-circle"></i>
    </div>

    </div>
}
export default Navbar;