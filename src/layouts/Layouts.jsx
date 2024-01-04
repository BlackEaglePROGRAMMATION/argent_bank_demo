import { Outlet } from 'react-router-dom';
import React from 'react';

import Header from "./Header";
import Footer from './Footer';

const Layouts = () => {
    return (
        <div>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layouts;