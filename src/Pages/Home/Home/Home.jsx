import React from 'react';
import Banner from './Banner/Banner';
import About from '../../About/About';
import Services from '../../Services/Services';
import Portfolio from '../../Portfolio/Portfolio';
import Contact from '../../Contact/Contact';
import Blog from '../../Blog/Blog';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <About></About>
           <Services></Services>
           <Portfolio></Portfolio>
           <Blog></Blog>
           <Contact></Contact>
        </div>
    );
};

export default Home;