import React from 'react';
import Card from './Card';
import './Products.css';

const Products = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
            <Card />
        </div>
    );
};

export default Products;
