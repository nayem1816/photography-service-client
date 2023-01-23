import React from 'react';
import Card from './Card';
import './Products.css';

const Products = () => {
    const [products, setProducts] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:5050/api/v1/get-products')
            .then((res) => res.json())
            .then((data) => setProducts(data.data));
    }, []);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
            {products.map((product, id) => (
                <Card key={id} product={product} />
            ))}
        </div>
    );
};

export default Products;
