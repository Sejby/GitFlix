import React from 'react';
import './Footer.scss';

function Footer() {
    return (
        <footer>
            <h2>Coded and Designed by Jan Schejbal</h2>
            <h3>©2020, All Rights Reserved</h3>
            <p>Powered by <a href="https://www.themoviedb.org/" target='_blank' rel="noopener noreferrer"><span>TMDb API</span></a></p>
            <img src={require('./logo_tmdb.png')} alt="" height='50px'/>
        </footer>
    )
}

export default Footer;
