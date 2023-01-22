import React from 'react';
import { Link } from 'react-router-dom';

const Details = () => {
    return (
        <div className="container mx-auto my-5 md:my-10">
            <div className="shadow-lg rounded-lg">
                <div className="grid grid-cols-1 lg:grid-cols-5">
                    <div className="lg:col-span-3">
                        <img
                            className="w-full h-full object-cover rounded-lg"
                            src="https://web.dotthemes.com/html/weddy-preview/weddy/images/blog/blog-img1.jpg"
                            alt=""
                        />
                    </div>
                    <div className="lg:col-span-2 ">
                        <div className="p-5 h-full grid grid-rows-2">
                            <div className="">
                                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
                                    Wedding Photography
                                </h1>
                                <p className="text-gray-500 my-2 text-justify">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Sunt iusto nesciunt
                                    necessitatibus at sapiente repellendus.
                                    Eius, ipsam sapiente libero temporibus sequi
                                    veniam nesciunt autem quo. Temporibus
                                    excepturi corporis dicta placeat, aliquid
                                    quod quia dolorem consequuntur ipsa fugiat
                                    tempora culpa iste quasi. Ea expedita ipsa
                                    cupiditate laborum fuga voluptatem corrupti
                                    dolor quos quae temporibus ut consequuntur
                                    dignissimos quia, dolorem corporis quidem
                                    iusto vitae, incidunt optio suscipit non
                                    magnam totam nesciunt odio. Impedit fugit
                                    aperiam ipsum aliquid hic eveniet, sunt
                                    maxime, facilis nulla vitae adipisci
                                    voluptates. Exercitationem quae error magnam
                                    iure illo delectus, impedit corporis dolor
                                    voluptatum excepturi, ipsa reiciendis quas
                                    sed.
                                </p>
                            </div>
                            <Link className="self-end" to="/checkout">
                                <button className="text-gray-900 bg-white border border-yellow-400 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 w-full rounded">
                                    Buy Now ($10)
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
