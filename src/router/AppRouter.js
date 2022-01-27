import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import LoginScreen from '../components/auth/LoginScreen';
import HomeScreen from '../components/Spotify/HomeScreen';

const AppRouter = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route
                        element={<LoginScreen />}
                        exact
                        path="/login"
                    />

                    <Route 
                        element={<HomeScreen />}
                        path="/"
                    />
                    <Route 
                        path="*"
                        element={<Navigate to="/"/>}
                    />
                </Routes>
            </div>
        </Router>
    )
}

export default AppRouter;