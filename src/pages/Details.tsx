import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Details = () => {
    const { id } = useParams();
    const [product, setProduct] = React.useState<any>({});

    React.useEffect(() => {
        fetch(`http://localhost:5050/api/v1/get-product/${id}`)
            .then((res) => res.json())
            .then((data) => setProduct(data.data));
    }, [id]);

    return (
        <div className="container mx-auto my-5 md:my-10">
            <div className="shadow-lg rounded-lg">
                <div className="grid grid-cols-1 lg:grid-cols-5">
                    <div className="lg:col-span-3">
                        <img
                            className="w-full h-full object-cover rounded-lg"
                            src={product?.image}
                            alt=""
                        />
                    </div>
                    <div className="lg:col-span-2 ">
                        <div className="p-5 h-full grid grid-rows-2">
                            <div className="">
                                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
                                    {product?.title}
                                </h1>
                                <p className="text-gray-500 my-2 text-justify">
                                    {product?.description}
                                </p>
                            </div>
                            <Link
                                className="self-end"
                                to={`/checkout/${product._id}`}
                            >
                                <button className="text-gray-900 bg-white border border-yellow-400 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 w-full rounded">
                                    Buy Now (${product?.price})
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
