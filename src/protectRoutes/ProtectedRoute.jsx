import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = ({
    isAuthenticated, 
    children, 
    routeAdmin,
    isAdmin,
    redirect = '/login',
    adminRedirect = '/profile'
}) => {
    if(!isAuthenticated){
        return <Navigate to={redirect}/>
    }
    if(routeAdmin && !isAdmin){
        return <Navigate to={adminRedirect}/>
    }
  return children? children : <Outlet/>
}

export default ProtectedRoute