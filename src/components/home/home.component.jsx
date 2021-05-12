import React from 'react'
import Header from '../header/header.component';
import Menu from '../menu/menu.component';
import './home.style.scss';

const Home = () => {
    return (
        <div>
            <Header />
            <Menu />
            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                            </div>
                            <div className="col-sm-6">
                                <h6 className='float-right'><strong>Welcome, Bassey</strong></h6>
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-sm-12">
                                <span className='highlight-today'>TODAY'S HIGHLIGHTS</span>
                                <span className='date-icon'><i className="fas fa-calendar" /> &nbsp;&nbsp;23 Mar, 2021</span>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="content">
                    <div className="container-fluid highlights">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h5><strong>Soil data</strong></h5>
                            </div>
                            <div className="col-sm-6">
                                <a className='float-right'>See full report</a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-6">
                                <div className="small-box bg-info card">
                                    <div className="inner">
                                        <p>pH Value</p>
                                        <h3>5.7</h3>
                                    </div>
                                    <div className="icon">
                                        <i className="ion ion-bag" />
                                    </div>
                                    <div className="small-box-footer">0.2 <i className="fas fa-arrow-down" /> than last value</div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="container-fluid highlights">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h5><strong>Weather</strong></h5>
                            </div>
                            <div className="col-sm-6">
                                <a className='float-right'>See full report</a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-6">
                                <div className="small-box bg-info card">
                                    <div className="inner">
                                        <p>Wind Speed</p>
                                        <h3>32m/s</h3>
                                    </div>
                                    <div className="icon">
                                        <i className="ion ion-bag" />
                                    </div>
                                    <div className="small-box-footer">0.2 <i className="fas fa-arrow-down" /> than last value</div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </section>
            </div>
            <footer className="main-footer">
                Copyright © 2014-2021 <a href="">HASAC</a>.
                All rights reserved.
                <div className="float-right d-none d-sm-inline-block">
                    Version 1.0.0
                </div>
            </footer>
        </div>
    )
}

export default Home;