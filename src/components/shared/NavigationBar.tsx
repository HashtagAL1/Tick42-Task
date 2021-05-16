import React, { useState } from 'react';
import { Link, withRouter, useLocation } from 'react-router-dom';
import { IRoute, ILocation } from '../../types/sharedTypes'

const NavigationBar: React.FC = () => {
    const location = useLocation<ILocation>();
    const [routes, setRoutes] = useState<IRoute[]>([
        { name: 'Dashboard', to: '/' },
        { name: 'Projects', to: '/projects' },
        { name: 'Employees', to: '/employees' }
    ])

    return <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
        <span className="navbar-brand">Project Manager</span>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
    
        <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
                {routes.map((r, i) => {
                    return <li key={r.name} className="nav-item">
                        <Link className={`nav-link ${location.pathname === r.to ? 'active': ''}`} to={r.to}>
                            {r.name}
                        </Link>
                    </li>
                })}
            </ul>
        </div>
        </div>
    </nav>
};

export default withRouter(NavigationBar);