import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';

const AdminRoute = ({ children }) => {

    const user = JSON.parse(localStorage.getItem("user"))
    const navigate = useNavigate()

    useEffect(() => {
        if (user?.role !== "admin") {
            navigate("/login")
        }
    }, [])

    return (
        <div>
            {children}
        </div>
    );
}

export default AdminRoute;