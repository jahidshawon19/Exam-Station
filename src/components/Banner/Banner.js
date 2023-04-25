import React from 'react';
import './Banner.css';
const Banner = () => {
    return (
        <>
    <section className="content-banner">

            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-12">
                        <div className="banner-con text-center">
                            <p className="first-title mt-5">Free Online Quizzes for IT Job</p>
                            <p className="banner-des mt-3">Bank (IT), Ministry, Power Sector, Gas Sector</p>
                            <a href="#" target="_blank" className="banner-btn mt-3">Take Exam</a>
                        </div>
                    </div>
                </div>
            </div>

            
    </section>            
        </>
    );
};

export default Banner;