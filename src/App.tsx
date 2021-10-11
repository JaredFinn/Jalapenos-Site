import React, { useEffect, useState } from 'react';
// import { HashRouter as Router, Route } from 'react-router-dom';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/Footer/ScrollToTop';
import { Home } from './pages/Home';
import './scss/main.scss';

export const App: React.FC = () => {
    return (
        <>
            <ScrollToTop />
            <Home>
            </Home>
            <Footer />
        </>
    );
};

