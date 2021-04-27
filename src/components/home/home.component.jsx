import React from 'react'
import './home.style.scss';

const Home = () => {
    return (
        
        <div className="content-wrapper">
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                        </div>
                        <div className="col-sm-6">
                            <h6 className='float-right'> Welcome back, Bassey</h6>
                        </div>
                    </div>
                    <div className="row mb-2">
                        <div className="col-sm-12">
                            <span className='highlight-text'>TODAY'S HIGHLIGHT</span>
                            <span className='date-icon'><i className="fas fa-calendar" /> &nbsp;&nbsp;23 Mar, 2021</span>
                        </div>
                    </div>
                </div>
            </div>

            <section className="content">
                <div className="container-fluid highlights">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h5>Soil</h5>
                        </div>
                        <div className="col-sm-6">
                            <a className='float-right'>See full report</a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-6">
                            <div className="small-box bg-info">
                                <div className="inner">
                                    <p>pH Value</p>
                                    <h3>5.7</h3>
                                </div>
                                <div className="icon">
                                    <i className="ion ion-bag" />
                                </div>
                                <a href="#" className="small-box-footer">0.2 <i className="fas fa-arrow-down" /> than last value</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid highlights">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h5>Weather</h5>
                        </div>
                        <div className="col-sm-6">
                            <a className='float-right'>See full report</a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-6">
                            <div className="small-box bg-info">
                                <div className="inner">
                                    <p>pH Value</p>
                                    <h3>5.7</h3>
                                </div>
                                <div className="icon">
                                    <i className="ion ion-bag" />
                                </div>
                                <a href="#" className="small-box-footer">1.5 <i className="fas fa-arrow-up" /> than last value</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;