import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function ProtectedRoute() {
  let auth = {token:localStorage.getItem('token')};
  return (
      auth.token !== null ? <Outlet/> : <Navigate to={'/login'}/>
  )
}
