import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { toast } from 'react-toastify';

type Inputs = {
    title: string;
    price: number;
    description: string;
};

const AddProducts = () => {
    const [imageUrl, setImageUrl] = React.useState<string | null>(null);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<Inputs>();

    const handleImageUpload = (event: any) => {
        const data = new FormData();
        data.append('file', event.target.files[0]);
        data.append('upload_preset', 'fn0lkrx9');
        data.append('cloud_name', 'nayem1816');
        fetch('https://api.cloudinary.com/v1_1/nayem1816/image/upload', {
            method: 'POST',
            body: data,
        })
            .then((res) => res.json())
            .then((data) => {
                setImageUrl(data.secure_url);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        const productData = {
            title: data.title,
            image: imageUrl,
            price: data.price,
            description: data.description,
        };
        fetch('http://localhost:5050/api/v1/add-product', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(productData),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    toast.success('Product added successfully', {
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
            <h2 className="text-2xl">Add Product</h2>
            <div className="form mt-16">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                >
                    <div className="relative z-0 w-full mb-2 group">
                        <label
                            htmlFor="title"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Image Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Enter Image title"
                            {...register('title', { required: true })}
                            required
                        />
                        {errors.title && <span>This field is required</span>}
                    </div>
                    <div className="relative z-0 w-full mb-2 group">
                        <label
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            htmlFor="file_input"
                        >
                            Upload Image
                        </label>
                        <input
                            onChange={handleImageUpload}
                            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                            id="file_input"
                            type="file"
                        />
                    </div>
                    <div className="relative z-0 w-full mb-2 group col-span-2">
                        <label
                            htmlFor="price"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Price
                        </label>
                        <input
                            type="number"
                            id="price"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Enter price"
                            required
                            {...register('price', { required: true })}
                        />
                        {errors.price && <span>This field is required</span>}
                    </div>
                    <div className="relative z-0 w-full mb-2 group col-span-2">
                        <label
                            htmlFor="message"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Description
                        </label>
                        <textarea
                            id="message"
                            rows={4}
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Write this image description"
                            {...register('description', { required: true })}
                        ></textarea>
                        {errors.description && (
                            <span>This field is required</span>
                        )}
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

export default AddProducts;
