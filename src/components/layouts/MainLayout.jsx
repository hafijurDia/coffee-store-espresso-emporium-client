import React from 'react';
import PropTypes from 'prop-types';
import './MainLayout.css';
import Header from '../Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';

const MainLayout = () => {
    return (
       <>
    <Header></Header>
    <Outlet></Outlet>
    <Footer></Footer>
       </>
    );
};


MainLayout.propTypes = {

};


export default MainLayout;
