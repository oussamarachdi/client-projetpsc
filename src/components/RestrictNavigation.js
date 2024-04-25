import React from 'react'
import { Navigate } from 'react-router-dom';

export const RestrictNavigation = () => {
   
  return (
    <div>
        <Navigate to="/" replace />
    </div>
  )
}
