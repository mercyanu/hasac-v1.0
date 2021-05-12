import React from 'react';
import AllTime from '../alltime/alltime.component';
import ChartComp from '../chart/chart.component';
import Forecast from '../forecast/forecast.component';
import Header from '../header/header.component';
import Menu from '../menu/menu.component';
import './soil.style.scss';

const Soil = () => {
    return (
        <div>
            <Header />
            <Menu />

            <div className="content-wrapper">
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-12 float-right">
                                <p className=" float-right"><strong>Welcome, Bassey</strong></p>
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h5><strong>Soil sensor data</strong></h5>
                            </div>
                        </div>
                    </div>{/* /.container-fluid */}
                </section>

                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            {/* /.col (LEFT) */}
                            <div className="col-md-8">
                                {/* TEMPERATURE CHART */}
                                <div className="card card-primary chart-card">
                                    <div className="card-header chart-header">
                                        <h3 className="card-title">TEMPERATURE</h3>
                                    </div>
                                    <div className="card-body">
                                        <ChartComp />
                                    </div>
                                    {/* /.card-body */}
                                </div>
                                {/* MOISTURE CHART */}
                                <div className="card card-primary chart-card">
                                    <div className="card-header chart-header">
                                        <h3 className="card-title">MOISTURE</h3>
                                    </div>
                                    <div className="card-body">
                                        <ChartComp />
                                    </div>
                                    {/* /.card-body */}
                                </div>
                            </div>

                            {/* /.col (RIGHT) */}
                            <div className="col-md-4">
                                <Forecast />
                                <AllTime />
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

export default Soil;