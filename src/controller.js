import React from 'react';
import DashboardLayout from './components/dashboardLayout/Dashboard';
import  {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const Controller = () => {
    return (
        <Router>
            <DashboardLayout>
                This is a dashboard layout.
                <switch>
                    <Route />
                </switch>
                    This is a controller
            </DashboardLayout>
        </Router>
    )
}

export default Controller;