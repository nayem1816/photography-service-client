import React from 'react';
import { Button } from 'flowbite-react';

const OrderTable = ({ order }: any) => {
    return (
        <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            <th scope="row" className="px-6 py-4">
                {order?.name}
            </th>
            <td className="px-6 py-4">{order.email}</td>
            <td className="px-6 py-4">{order.phone}</td>
            <td className="px-6 py-4">{order.product?.title}</td>
            <td className="px-6 py-4 flex gap-2">
                <div>
                    <Button outline={true} gradientDuoTone="tealToLime">
                        Edit
                    </Button>
                </div>
                <div>
                    <Button outline={true} gradientDuoTone="pinkToOrange">
                        Delete
                    </Button>
                </div>
            </td>
        </tr>
    );
};

export default OrderTable;
