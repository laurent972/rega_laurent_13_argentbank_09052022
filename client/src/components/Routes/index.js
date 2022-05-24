import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../Header';
import Home from '../../pages/Home';
import NotFound from '../../pages/NotFound';
import Profil from '../../pages/Profil';

import Footer from '../Footer';
import SignIn from '../../pages/SignIn';


const index = () => {
    return (
        <>
            <BrowserRouter >
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/profil" element={<Profil />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
};

export default index;