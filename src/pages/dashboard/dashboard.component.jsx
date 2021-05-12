import React from 'react';
import Header from '../../components/header/header.component';
import Home from '../../components/home/home.component';
import Menu from '../../components/menu/menu.component';
import Soil from '../../components/soil/soil.component';
import Landing from '../landing/landing.component';

const Dashboard = () => {
    return (
        <div>
            <Header />
            <Menu />
            <Home />
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

export default Dashboard;