import React from 'react';
import SingleProduct from './SingleProduct';

const ProductTable = () => {
    const [products, setProducts] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:5050/api/v1/get-products')
            .then((res) => res.json())
            .then((data) => setProducts(data.data));
    }, [products]);
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Product title
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Create Date
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, i) => (
                        <SingleProduct key={i} product={product} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductTable;
