import React from 'react';
import { Outlet,Navigate } from 'react-router-dom';
import useAuthStatus from './hooks/useAuthStatus';

export default function PrivateRoute() {

    const {loggedIn,checkingStatus} = useAuthStatus;

  return loggedIn ? <Outlet /> : <Navigate to="/sign-in " />;
}
