import {Link} from "react-router-dom"
import {useState, useEffect} from "react"

const Navbar = () => {
  const [loggedIn, setLoggedIn]= useState(false);
  useEffect(()=>{
    let token=localStorage.getItem('token');
    if(!token){
      setLoggedIn(false);
    }
    else setLoggedIn(true);
  },[loggedIn])
  const handleLogout=()=>{
    localStorage.clear()
    setLoggedIn(false);
  }
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to="/" class="navbar-brand" >
        GoodReadProject
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link to="/books" class="nav-link">
              Books
            </Link>
          </li>
          <li class="nav-item">
            <Link to ="/about" class="nav-link">
              About
            </Link>
          </li>
          <li class="nav-item">
            <Link to ="/contact" class="nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="loginButton my-2">
        {loggedIn ? (
          <Link to= "/" className='btn btn-danger' onClick="handleLogout">Logout</Link>
        ) :(
          <Link to="/login" className="btn btn-primary">Login</Link>
        )}
        </div>
    </nav>
  );
};
export default Navbar;
