import React from 'react';

import { Navigate } from 'react-router-dom';
import { useAdminContext } from '../Context/adminAuthContext';

export default function SigninAdminProtectedRoute({ children }) {
    const [isAuthenticated] = useAdminContext();
    const token = localStorage.getItem('auth_token');
    if (!isAuthenticated && !token) {
        return <Navigate to="/admin/signin" />;
    }
    return children;
}