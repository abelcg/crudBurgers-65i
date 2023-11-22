/* eslint-disable react/prop-types */
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = JSON.parse(localStorage.getItem('user-token')) || null;

  if (!token) {
    return <Navigate to={'/auth/login/'} />;
  } else {
    return children;
  }
};

export default ProtectedRoute;
