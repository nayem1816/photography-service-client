import React from 'react';
import { Link } from 'react-router-dom';

const Card = () => {
    const description = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia aspernatur dolorem ipsam quos quaerat officia corporis, cum sequi ut alias similique perspiciatis facere vel quae laboriosam voluptate iusto corrupti dolorum assumenda minima at. Asperiores fuga iste autem repellendus, minima accusamus praesentium ea exercitationem eius error qui eum magni molestiae.`;
    return (
        <div className="shadow-lg rounded m-1">
            <div className="img">
                <img
                    className="w-full rounded"
                    src="https://web.dotthemes.com/html/weddy-preview/weddy/images/blog/blog-img1.jpg"
                    alt=""
                />
                <div className="category text-center">
                    <span className="bg-black text-white font-bold px-4 rounded py-1">
                        Wedding
                    </span>
                </div>
            </div>
            <div className="content p-2">
                <h1 className="price text-gray-500 text-2xl mt-2">
                    <span className="font-bold text-gray-900">$</span> 100
                </h1>
                <h2 className="title font-bold text-xl my-2">
                    Wedding Photography
                </h2>
                <p className="description text-justify">
                    {description.length > 100
                        ? description.slice(0, 100) + '...'
                        : description}
                </p>
            </div>
            <div className="buttons grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-2 sm:gap-1 md:gap-2 mt-3 p-2">
                <Link to="/details">
                    <button className="text-gray-900 bg-white border border-lime-400 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 w-full rounded">
                        View More
                    </button>
                </Link>
                <Link to="/checkout">
                    <button className="text-gray-900 bg-white border border-yellow-400 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 w-full rounded">
                        Buy Now
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Card;
