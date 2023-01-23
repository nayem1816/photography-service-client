import React from 'react';
import ProductTable from './ProductTable';

const Products = () => {
    return (
        <div>
            <h2>Manage Products</h2>
            <div className="show-product mt-10 mb-5">
                <ProductTable />
            </div>
        </div>
    );
};

export default Products;
