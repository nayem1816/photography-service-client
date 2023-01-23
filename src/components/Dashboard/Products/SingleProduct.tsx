import React from 'react';
import { Button } from 'flowbite-react';
import { toast } from 'react-toastify';

const SingleProduct = ({ product }: { product: any }) => {
    const handleDeleteBtn = (id: string) => {
        fetch(`http://localhost:5050/api/v1/delete-product/${id}`, {
            method: 'DELETE',
        })
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    toast.success('Product deleted successfully', {
                        position: 'top-right',
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                    });
                }
            });
    };

    return (
        <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
                {product?.title}
            </th>
            <td className="px-6 py-4">${product.price}</td>
            <td className="px-6 py-4">
                {new Date(product.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                })}
            </td>
            <td className="px-6 py-4 flex gap-2">
                <div>
                    <Button outline={true} gradientDuoTone="tealToLime">
                        Edit
                    </Button>
                </div>
                <div>
                    <Button
                        onClick={() => handleDeleteBtn(product._id)}
                        outline={true}
                        gradientDuoTone="pinkToOrange"
                    >
                        Delete
                    </Button>
                </div>
            </td>
        </tr>
    );
};

export default SingleProduct;
