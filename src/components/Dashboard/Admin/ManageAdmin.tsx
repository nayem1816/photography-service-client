import React from 'react';

const ManageAdmin = () => {
    const [admins, setAdmins] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:5050/api/v1/get-admins')
            .then((res) => res.json())
            .then((data) => setAdmins(data.data));
    }, [admins]);
    return (
        <div className="mt-16">
            <h2 className="text-2xl">Manage Admins</h2>
            <div className="show-product mt-10 mb-5">
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Admin Email
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Create Date
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {admins.map((admin: any, i) => (
                                <tr
                                    key={i}
                                    className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                                >
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        {admin?.email}
                                    </th>
                                    <td className="px-6 py-4">
                                        {new Date(
                                            admin.createdAt
                                        ).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric',
                                        })}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageAdmin;
