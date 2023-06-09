import React, { useContext } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
const Navbar = () => {
  const {user,logOut} = useContext(AuthContext)

  const handleLogOut = ()=>{
    logOut()
    .then(()=>{

    })
    .catch(err=>{
      console.log(err)
    })
  }
    return (
        <>
    <header className="header">
        <div className="header-inner">
          <div className="container-fluid px-lg-5">
            <nav className="navbar navbar-expand-lg my-navbar">

        {/* <!-- <a className="navbar-brand" href="#"><span className="logo">
          <img src="#" className="img-fluid" style="width:30px; margin:-3px 0px 0px 0px;">White Square</span>
        </a> --> */}

        <Link className="navbar-brand" to="/"><span className="logo">Exam Station</span>
          </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"><i className="fas fa-bars" style={{margin:'5px 0px 0px 0px'}}></i></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  About
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">Question Setter</a>
                  <a className="dropdown-item" href="#">Why Exam Station</a>
                  
                </div>
              </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Topics</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Video</a>
            </li>
              <li className="nav-item">
              <a className="nav-link" href="#">Blog</a>
            </li>
       
            <li className="nav-item">
              <a className="nav-link" href="#">Statistic</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Career</a>
            </li>
          {
            !user?.email&&<li className="nav-item">
            <Link className="nav-link" to="/login">Login</Link>
          </li>
          }
           
          </ul>
          <form className="form-inline my-2 my-lg-0">

            {
              user?.email?<button onClick={handleLogOut} className="btn my-2 my-sm-0 btn-danger" type="submit">Logout</button>
              :

              <Link to="/register">
              <button className="header-btn my-2 my-sm-0" type="submit">Register</button>
              </Link>

            }
            
            
          </form>
        </div>
      </nav>
      
          </div>
        </div>
      
      
      </header>
        </>
    );
};

export default Navbar;