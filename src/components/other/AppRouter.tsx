import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Dashboard from '../pages/Dashboard';
import EmployeeList from '../pages/EmployeeList';
import NotFound from '../pages/NotFound';
import ProjectList from '../pages/ProjectList';

const AppRouter: React.FC = () => {
    return <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/projects" exact component={ProjectList} />
        <Route path="/employees" exact component={EmployeeList} />
        <Route path="*" component={NotFound} />
    </Switch>
};

export default AppRouter;