import React from 'react';
import Banner from '../components/Home/Banner/Banner';
import Products from '../components/Home/Products/Products';

const Home = () => {
    return (
        <div className="">
            <Banner />
            <div className="container mx-auto">
                <div className=" my-5 sm:my-5 md:my-10">
                    <Products />
                </div>
            </div>
        </div>
    );
};

export default Home;
