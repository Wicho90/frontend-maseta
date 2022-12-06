
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Navbar } from '../components/ui/Navbar';

import HomePage from '../pages/HomePage';
import { HumedadPage } from '../pages/HumedadPage';
import LuzPage from '../pages/LuzPage';
import { RegresionPage } from '../pages/RegresionPage';


export const DashboardRoutes = () => {
    

    return (
        <>
            <ToastContainer />

            <Navbar />

            <div className="container mt-2">

                <Routes>
                    <Route path='/' element={ <HomePage /> } /> 
                    <Route path='/luz' element={ <LuzPage /> } /> 
                    <Route path='/humedad' element={ <HumedadPage /> } /> 
                    <Route path='/regresion' element={ <RegresionPage /> } />
                </Routes>

            </div>



        </>
    )
}