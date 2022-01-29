import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import LoginScreen from '../components/auth/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';

const AppRouter = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/login" element={<LoginScreen />} />
                    <Route path="/*" element={<DashboardRoutes />} />
                </Routes>
            </div>
        </Router>
    )
}

export default AppRouter;