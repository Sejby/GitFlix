import React, { Component } from 'react';
import './Header.scss';

export class Header extends Component {
    render() {
        return (
            <header>
                <nav>
                    <div className="centered">
                        <input type="search" placeholder='Search...'/>
                    </div>
                    <a href="index.html" id='logo'>Git<span>Flix</span></a>
                    <div className="right">
                        <a href="#now_playing">Now Playing</a>
                        <a href="#popular">Popular</a>
                        <a href="#top_rated">Top-Rated</a>
                        <a href="#upcoming">Upcoming</a>
                    </div>

                </nav>
            </header>

        )
    }
}

export default Header;
