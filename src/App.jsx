import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react';

import Layouts from './layouts/Layouts';

import Home from './pages/Home';
import SignIn from './pages/Sign-in';
import Profile from './pages/Profile';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layouts />}>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<Home />} />
                    <Route path="/sign-in" element={<SignIn />} />
                    <Route path="/profile" element={<Profile />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;