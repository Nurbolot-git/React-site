import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage from '../assets/pizza.jpeg';
import '../styles/Home.css';
function Home() {
    return (

        <section className="home">
            <div className="headerContainer"
                style={{ backgroundImage: `url(${BannerImage})` }}>
                <h1 className="header__title">
                    title
                </h1>
                <p className="header__text">
                    lorem ipsum dolor sit amet, consectetur adip
                </p>
                <Link to="/menu">
                    < button >order now</button>
                </Link>
            </div>
        </section >

    )
}

export default Home