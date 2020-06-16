import React, { Component } from 'react';
import Slider from "react-slick";
import Loader from '../Loader/Loader';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Showcase.scss';

export class Showcase extends Component {
    state = {
        isLoaded: false,
        movieImages: []
    }

    async componentDidMount() {
        const apiKey = 'ae7b2025d9b365190a1e24a2973fdbc6';
        const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`;
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ movieImages: data, isLoaded: true });
    }

    render() {
        const imageRequestURL = 'https://image.tmdb.org/t/p/w1280';
        if (this.state.isLoaded === true) {
            var movies = [];
            var elements = [];
            var loader = null;
            for (var i = 0; i < 4; i++) {
                movies.push(this.state.movieImages.results[i]);
                elements.push(
                    <div>
                        <div className='imageDiv' style={{
                            backgroundImage: `url()`,
                            background: `linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ), url(${`${imageRequestURL}${this.state.isLoaded ? movies[i].backdrop_path : ''}`}) no-repeat center center / cover`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            width: "100%",
                            height: "100vh",
                        }}>
                            <div className='bottom-left'><h1>Upcoming</h1></div>
                            <div className='bottom-left'><h3>{this.state.isLoaded ? movies[i].original_title : 'Error 404: Image not Found'}</h3></div>
                        </div>
                    </div>);
            }
        }

        const settings = {
            dots: false,
            arrows: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1800
        };

        return (
            <div id='showcase'>
                {loader}
                <Slider {...settings}>
                    {elements}
                </Slider>
            </div>
        )
    }
}

export default Showcase;
