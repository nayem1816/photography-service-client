import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { toast } from 'react-toastify';

type Inputs = {
    email: string;
};

const CreateAdmin = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        const adminData = {
            email: data.email,
        };
        fetch(
            'https://photography-service-server-phi.vercel.app/api/v1/add-admin',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(adminData),
            }
        )
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    toast.success('New Admin created successfully', {
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
        <div className="w-full">
            <h2 className="text-2xl">Add Admin</h2>
            <div className="form mt-16">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                >
                    <div className="relative z-0 w-full mb-2 group">
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Enter Admin Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Enter Image title"
                            {...register('email', { required: true })}
                            required
                        />
                        {errors.email && <span>This field is required</span>}
                    </div>
                    <div className="col-span-2">
                        <button
                            type="submit"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateAdmin;
