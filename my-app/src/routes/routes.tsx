import React from 'react';
import {
    BrowserRouter as Router, 
    Routes, 
    Route
  } from 'react-router-dom';

import Card from "../components/Cards"



const AppRoutes: React.FC = () => (
    <div>
    <Router>
        <Card/>
    <Routes>
        <Route  path="/card" element={<Card/>} />

        <Route
                path="*"
                element={
                    <main style={{ padding: "1rem" }}>
                    <p>There's nothing here!</p>
                    </main>
                }
                />
    </Routes>
    </Router>
    </div>
);

export default AppRoutes;


