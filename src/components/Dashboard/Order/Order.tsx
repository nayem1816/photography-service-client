import React from 'react';
import OrderTable from './OrderTable';

const Order = () => {
    const [orders, setOrders] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:5050/api/v1/get-checkouts')
            .then((res) => res.json())
            .then((data) => setOrders(data.data));
    }, []);
    return (
        <div>
            <h2 className="text-2xl my-3">Manage Orders</h2>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Phone
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Product
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, i) => (
                            <OrderTable key={i} order={order} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Order;
