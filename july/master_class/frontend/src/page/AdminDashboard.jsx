import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
    const api = import.meta.env.VITE_BASE_URL;
    const token = localStorage.getItem("token");

    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        try {
            const res = await axios.get(`${api}/user`, {
                headers: {
                    Authorization: token
                }
            });
            if (res?.data?.status) {
                setUsers(res.data.users);
            }
        } catch (err) {
            console.error("Error fetching users:", err);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div className='flex min-h-screen min-w-full'>
            <div className='w-[20%] bg-teal-600 text-white p-4'>
                <p className='text-lg font-semibold'>Admin Panel</p>
                <p className='mt-4'>Users</p>
            </div>
            <div className='w-[80%] p-4'>
                <h2 className='text-2xl font-bold mb-4'>Users</h2>
                <div>
                    {users.length > 0 ? (
                        users.map((ele) => (
                            <div key={ele?._id} className='border p-3 shadow my-2 rounded'>
                                <h3 className='text-lg font-semibold'>Full Name: {ele?.fullName}</h3>
                                <p>Email: {ele?.email}</p>
                                <p>Role: {ele?.role}</p>
                            </div>
                        ))
                    ) : (
                        <p>No users found.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
