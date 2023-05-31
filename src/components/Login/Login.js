import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const Login = () => {
    const {user, loginUser, logOut } = useContext(AuthContext);


    const handleLogin= (e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        loginUser(email, password)
        .then(res=>{
            console.log(res.user);
            e.target.reset();
        })
        .catch(err=>{
            console.log(err)
        })
    }


    const handleLogOut=()=>{
        logOut()
        .then(()=>{

        })
        .catch(err=>{
            console.log(err)
        })
    }
    return (
        <>

                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <Link class="navbar-brand" to="/">Exam Station</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
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
                                user?.email&&<button className='btn btn-danger btn-sm btn-rounded' onClick={handleLogOut}>Logout</button>
                            }
                       
                    </ul>

                </div>
                </nav>

            
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-12 form-section'>
                        <div className='form-inner'>
                            <h3 className='font-weight-bold mb-5'>Sign In</h3>
                           
                            <form onSubmit={handleLogin}>
                                
                                <div class="form-group">
                                    <input type="email" name="email" class="form-control"placeholder="Email Address" />
                                </div>
                                <div class="form-group">
                                    <input type="password" name="password" class="form-control"placeholder="Password" />
                                </div>
                                <button className='btn btn-lg btn-block btn-warning register-btn' type="submit">Login</button>
                                <small>New to Exam Station?<Link to="/register">Register here</Link></small>
                            </form>
                        </div>
                    </div>

                  
                </div>
            </div>            
        </>
    );
};

export default Login;