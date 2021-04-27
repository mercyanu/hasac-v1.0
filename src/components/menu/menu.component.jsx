import React from 'react';
import './menu.style.scss';

const Menu = () => {
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            {/* Brand Logo */}
            <a href="index3.html" className="brand-link">
                <img src="" alt="logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                <span className="brand-text font-weight-light">HASAC</span>
            </a>
            {/* Sidebar */}
            <div className="sidebar">
                {/* Sidebar Menu */}
                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                    <li className="nav-header">NAVIGATION</li>
                    <li className="nav-item">
                            <a href="pages/gallery.html" className="nav-link">
                                <i className="nav-icon fas fa-home" />
                                <p>
                                    Home
            </p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="pages/kanban.html" className="nav-link">
                                <i className="nav-icon fas fa-bar-chart" />
                                <p>
                                    Soil
            </p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="pages/kanban.html" className="nav-link">
                                <i className="nav-icon fa fa-sun-o" />
                                <p>
                                    Weather
            </p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="pages/calendar.html" className="nav-link">
                                <i className="nav-icon far fa-flag" />
                                <p>
                                    Notification
              <span className="badge badge-danger right">2</span>
                                </p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="pages/kanban.html" className="nav-link">
                                <i className="nav-icon fas fa-cogs" />
                                <p>
                                    Settings
            </p>
                            </a>
                        </li>
                    </ul>
                </nav>
                {/* /.sidebar-menu */}
            </div>
            {/* /.sidebar */}
        </aside>

    )
}


export default Menu;