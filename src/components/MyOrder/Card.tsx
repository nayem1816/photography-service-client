import React from 'react';

const Card = ({ order }: any) => {
    return (
        <div className="bg-gray-100 mx-auto border-gray-500 border rounded-sm text-gray-700 mb-8 h-30">
            <div className="flex p-3 border-l-8 border-yellow-600">
                <div className="space-y-1 border-r-2 pr-3">
                    <div className="text-sm leading-5 font-semibold">
                        <span className="text-xs leading-4 font-normal text-gray-500">
                            {' '}
                            Name:
                        </span>{' '}
                        {order?.name}
                    </div>
                    <div className="text-sm leading-5 font-semibold">
                        <span className="text-xs leading-4 font-normal text-gray-500 pr">
                            {' '}
                            Email:
                        </span>{' '}
                        {order?.email}
                    </div>
                    <div className="text-sm leading-5 font-semibold">
                        <span className="text-xs leading-4 font-normal text-gray-500 pr">
                            {' '}
                            Phone:
                        </span>{' '}
                        {order?.phone}
                    </div>
                    <div className="text-sm leading-5 font-semibold">
                        <span className="text-xs leading-4 font-normal text-gray-500 pr">
                            {' '}
                            City:
                        </span>{' '}
                        {order?.city}
                    </div>
                    <div className="text-sm leading-5 font-semibold">{}</div>
                </div>
                <div className="flex-1">
                    <div className="ml-3 space-y-1 border-r-2 pr-3">
                        <div className="text-base leading-6 font-bold">
                            {order?.product.title}
                        </div>
                        <div className="text-sm leading-4 font-normal">
                            <span className="text-xs leading-4 font-normal text-gray-500">
                                {' '}
                                Carrier
                            </span>{' '}
                            PAPER TRANSPORT INC.
                        </div>
                        <div className="text-sm leading-4 font-normal">
                            <span className="text-xs leading-4 font-normal text-gray-500">
                                {' '}
                                Destination
                            </span>{' '}
                            {order?.city + ', ' + order?.address}
                        </div>
                    </div>
                </div>
                <div className="border-r-2 pr-3">
                    <div>
                        <div className="ml-3 my-3 border-gray-200 border-2 bg-gray-300 p-1">
                            <div className="uppercase text-xs leading-4 font-medium">
                                Price
                            </div>
                            <div className="text-center text-sm leading-4 font-semibold text-gray-800">
                                ${order?.product.price}
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="ml-3 my-5 bg-yellow-600 p-1 w-20">
                        <div className="uppercase text-xs leading-4 font-semibold text-center text-yellow-100">
                            {order?.status}
                        </div>
                    </div>
                </div>
                <div>
                    <button className="text-gray-100 rounded-sm my-5 ml-2 focus:outline-none bg-gray-500">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
