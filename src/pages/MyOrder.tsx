import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../components/Login/firebase.init';
import Card from '../components/MyOrder/Card';

const MyOrder = () => {
    const [user, loading] = useAuthState(auth);
    const [orders, setOrders] = React.useState([]);

    React.useEffect(() => {
        fetch(
            `https://photography-service-server-phi.vercel.app/api/v1/get-checkout/${user?.email}`
        )
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setOrders(data.data);
            });
    }, [user?.email]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2 className="my-10 text-center text-3xl">My Order</h2>
            <div className="">
                <div className="container mx-auto p-8 antialiased">
                    {orders.length > 0 ? (
                        <div className="my-5 md:my-16">
                            {orders.map((order, id) => (
                                <Card key={id} order={order} />
                            ))}
                        </div>
                    ) : (
                        <div className="flex items-center justify-center my-5 md:my-16 ">
                            <h2 className="text-center text-2xl ">
                                No Order Found
                            </h2>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MyOrder;
