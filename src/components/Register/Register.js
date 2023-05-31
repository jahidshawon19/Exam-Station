import React, { useContext } from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const Register = () => {

    const {registerUser} = useContext(AuthContext)

    const handleRegister=(e)=>{
        e.preventDefault();

        const fullName = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value; 
        
        registerUser(email, password) 

        .then(res=>{
            console.log(res.user)
        })
        .catch(err=>{
            console.log(err)
        })
    }
    return (
        <div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-6 form-section p-0'>
                        <div className='form-inner'>
                            <h2 className='font-weight-bold'>Exam Station</h2>
                            <h5>Create Account</h5>
                            <form onSubmit={handleRegister} className='mt-3'>
                                <div class="form-group">
                                    <input type="text" class="form-control"placeholder="Full Name" />
                                </div>
                                <div class="form-group">
                                    <input type="email" name="email" class="form-control"placeholder="Email Address" />
                                </div>
                                <div class="form-group">
                                    <input type="password" name="password" class="form-control"placeholder="Password" />
                                </div>
                                <button className='btn btn-lg btn-block btn-warning register-btn' type="submit">Register</button>
                                <small>Already have an account?<Link to="/login">Sign in here</Link></small>
                            </form>
                        </div>
                    </div>

                    <div className='col-lg-6 bg-img d-none d-lg-block'>
                        <div className='info'>
                            <div className='animated-text'>
                                <h1>Welcome to Exam Station</h1>
                            </div>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. make a type specimen book. make a type specimen book.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;