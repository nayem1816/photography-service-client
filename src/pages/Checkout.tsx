import React from 'react';
import { useParams } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { toast } from 'react-toastify';

type Inputs = {
    name: string;
    email: number;
    phone: string;
    address: string;
    city: string;
};

const Checkout = () => {
    const { id } = useParams();
    const [product, setProduct] = React.useState<any>({});
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<Inputs>();

    React.useEffect(() => {
        fetch(`http://localhost:5050/api/v1/get-product/${id}`)
            .then((res) => res.json())
            .then((data) => setProduct(data.data));
    }, [id]);

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        const checkoutData = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            address: data.address,
            city: data.city,
            product: product,
        };
        console.log(checkoutData);
        fetch('http://localhost:5050/api/v1/add-checkout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(checkoutData),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    toast.success('Product buy successfully', {
                        position: 'top-right',
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                    });
                    reset();
                }
            });
    };
    return (
        <div className="bg-gray-100">
            <div className="min-h-screen p-6 flex items-center justify-center">
                <div className="container max-w-screen-lg mx-auto">
                    <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                            <div className="text-gray-600">
                                <p className="font-medium text-lg">
                                    Personal Details
                                </p>
                                <p>Please fill out all the fields.</p>
                            </div>

                            <div className="lg:col-span-2">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                        <div className="md:col-span-5">
                                            <label htmlFor="name">
                                                Full Name
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                placeholder="John Doe"
                                                {...register('name', {
                                                    required: true,
                                                })}
                                            />
                                            {errors.name && (
                                                <span className="text-red-600">
                                                    This field is required
                                                </span>
                                            )}
                                        </div>

                                        <div className="md:col-span-5">
                                            <label htmlFor="email">
                                                Email Address
                                            </label>
                                            <input
                                                type="text"
                                                id="email"
                                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                placeholder="email@domain.com"
                                                {...register('email', {
                                                    required: true,
                                                })}
                                            />
                                            {errors.email && (
                                                <span className="text-red-600">
                                                    This field is required
                                                </span>
                                            )}
                                        </div>
                                        <div className="md:col-span-5">
                                            <label htmlFor="phone">
                                                Phone Number
                                            </label>
                                            <input
                                                type="text"
                                                id="phone"
                                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                placeholder="+880 123 456 7890"
                                                {...register('phone', {
                                                    required: true,
                                                })}
                                            />
                                            {errors.phone && (
                                                <span className="text-red-600">
                                                    This field is required
                                                </span>
                                            )}
                                        </div>

                                        <div className="md:col-span-3">
                                            <label htmlFor="address">
                                                Address / Street
                                            </label>
                                            <input
                                                type="text"
                                                id="address"
                                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                placeholder="Enter your address"
                                                {...register('address', {
                                                    required: true,
                                                })}
                                            />
                                            {errors.address && (
                                                <span className="text-red-600">
                                                    This field is required
                                                </span>
                                            )}
                                        </div>

                                        <div className="md:col-span-2">
                                            <label htmlFor="city">City</label>
                                            <input
                                                type="text"
                                                id="city"
                                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                placeholder="Dhaka"
                                                {...register('city')}
                                            />
                                        </div>
                                        <div className="md:col-span-3">
                                            <label htmlFor="pdName">
                                                Product Title
                                            </label>
                                            <input
                                                type="text"
                                                name="pdName"
                                                id="pdName"
                                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                defaultValue={product?.title}
                                                disabled
                                            />
                                        </div>
                                        <div className="md:col-span-2">
                                            <label htmlFor="pdPrice">
                                                Product Price($)
                                            </label>
                                            <input
                                                type="text"
                                                name="pdPrice"
                                                id="pdPrice"
                                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                defaultValue={product?.price}
                                                disabled
                                            />
                                        </div>

                                        <div className="md:col-span-5 text-right mt-3">
                                            <div className="inline-flex items-end">
                                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                                    Checkout
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
