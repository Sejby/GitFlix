import React, { Component } from 'react';
import Loader from '../Loader/Loader';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Content.scss';


export class Content extends Component {

    state = {
        nowPlaying: [],
        popular: [],
        toprated: [],
        upcoming: [],
        isLoadedNowPlaying: false,
        isLoadedPopular: false,
        isLoadedTopRated: false,
        isLoadedUpcoming: false
    }

    async apiCall(category) {
        const apiKey = 'ae7b2025d9b365190a1e24a2973fdbc6';
        switch (category) {
            case 'now_playing':
                let url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US`;
                let response = await fetch(url);
                let data = await response.json();
                this.setState({ nowPlaying: data, isLoadedNowPlaying: true });
                break;

            case 'popular':
                let url2 = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US`;
                let response2 = await fetch(url2);
                let data2 = await response2.json();
                this.setState({ popular: data2, isLoadedPopular: true });
                break;

            case 'top-rated':
                let url3 = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US`;
                let response3 = await fetch(url3);
                let data3 = await response3.json();
                this.setState({ toprated: data3, isLoadedTopRated: true });
                break;

            case 'upcoming':
                let url4 = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US`;
                let response4 = await fetch(url4);
                let data4 = await response4.json();
                this.setState({ upcoming: data4, isLoadedUpcoming: true });
                break;

            default:
                alert('Error 404');
        }
    }

    async componentDidMount() {
        this.apiCall('now_playing');
        this.apiCall('popular');
        this.apiCall('top-rated');
        this.apiCall('upcoming');
    }

    movieDetails(){
        console.log("jseš kokot");
    }

    render() {
        const imageRequestURL = 'https://image.tmdb.org/t/p/w1280';
        if (this.state.isLoadedNowPlaying === true) {
            var moviesNowPlaying = [];
            var elementsNowPlaying = [];
            for (var i = 0; i < 17; i++) {
                moviesNowPlaying.push(this.state.nowPlaying.results[i]);
                elementsNowPlaying.push(
                    <div>
                        <div className='posterDiv' style={{
                            backgroundImage: `url()`,
                            background: `url(${`${imageRequestURL}${this.state.isLoadedNowPlaying ? moviesNowPlaying[i].poster_path : ''}`}) no-repeat center center / cover`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            width: "200px",
                            height: "350px",
                        }}>
                        </div>
                    </div>);
            }
        }

        if (this.state.isLoadedPopular === true) {
            var moviesPopular = [];
            var elementsPopular = [];
            var loader = <Loader id='kokot' />;
            for (var i = 0; i < 17; i++) {
                moviesPopular.push(this.state.popular.results[i]);
                elementsPopular.push(
                    <div>
                        <div className='posterDiv' style={{
                            backgroundImage: `url()`,
                            background: `url(${`${imageRequestURL}${this.state.isLoadedPopular ? moviesPopular[i].poster_path : ''}`}) no-repeat center center / cover`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            width: "200px",
                            height: "350px",
                        }}>
                        </div>
                    </div>);
            }
            loader = null;
        }

        if (this.state.isLoadedTopRated === true) {
            var moviesTopRated = [];
            var elementsTopRated = [];
            for (var i = 0; i < 17; i++) {
                moviesTopRated.push(this.state.toprated.results[i]);
                elementsTopRated.push(
                    <div>
                        <div className='posterDiv' style={{
                            backgroundImage: `url()`,
                            background: `url(${`${imageRequestURL}${this.state.isLoadedTopRated ? moviesTopRated[i].poster_path : ''}`}) no-repeat center center / cover`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            width: "200px",
                            height: "350px",
                        }}>
                        </div>
                    </div>);
            }
        }

        if (this.state.isLoadedUpcoming === true) {
            var moviesUpcoming = [];
            var elementsUpcoming = [];
            for (var i = 0; i < 17; i++) {
                moviesUpcoming.push(this.state.upcoming.results[i]);
                elementsUpcoming.push(
                    <div>
                        <div className='posterDiv' onClick={() => this.movieDetails()} style={{
                            backgroundImage: `url()`,
                            background: `url(${`${imageRequestURL}${this.state.isLoadedUpcoming ? moviesUpcoming[i].poster_path : ''}`}) no-repeat center center / cover`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            width: "200px",
                            height: "350px",
                        }}>
                        </div>
                    </div>);
            }
        }

        const settings = {
            dots: false,
            arrows: true,
            infinite: false,
            slidesToShow: 6,
            slidesToScroll: 6,
            autoplay: false,

            responsive: [
                {
                    breakpoint: 1500,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 770,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: true
                    }
                }
            ]
        };

        return (
            <div id='content' >
                {loader}
                <div id='elementsDiv'>

                    <div id='now_playing'>
                        <h3>Now <span>Playing</span></h3>
                        <Slider {...settings} className='sliderDiv'>
                            {elementsNowPlaying}
                        </Slider>
                    </div>

                    <div id='popular'>
                        <h3>Popular</h3>
                        <Slider {...settings} className='sliderDiv'>
                            {elementsPopular}
                        </Slider>
                    </div>

                    <div id='top_rated'>
                        <h3>Top <span>Rated</span></h3>
                        <Slider {...settings} className='sliderDiv'>
                            {elementsTopRated}
                        </Slider>
                    </div>

                    <div id='upcoming'>
                        <h3>Up<span>coming</span></h3>
                        <Slider {...settings} className='sliderDiv'>
                            {elementsUpcoming}
                        </Slider>
                    </div>
                </div>
            </div >
        )
    }
}

export default Content;
