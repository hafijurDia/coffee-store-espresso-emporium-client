import React from 'react';
import PropTypes from 'prop-types';
import './Header.css'
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className='header-bg text-center'>
            <Link className=' flex  justify-center items-center'><img style={{width:"75px", height:'90px'}} src="https://i.ibb.co.com/Vw1bm1H/logo1.png" alt="" />
            <h1 className='text-white text-4xl md:text-5xl '>Espresso Emporium</h1></Link>
        </div>
    );
};


Header.propTypes = {

};


export default Header;
