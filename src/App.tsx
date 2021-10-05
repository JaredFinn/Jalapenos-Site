import React, { useEffect, useState } from 'react';
// import { HashRouter as Router, Route } from 'react-router-dom';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/Footer/ScrollToTop';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import './scss/main.scss';

export const App: React.FC = () => {
    return (
        <>
            <Navbar />
            <ScrollToTop />
            <Home />
            <Footer />
        </>
    );
};

