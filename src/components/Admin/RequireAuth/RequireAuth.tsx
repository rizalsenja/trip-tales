import { Navigate } from 'react-router-dom';
import { useAuth } from '../../../hook/useAuth';
import type { JSX } from 'react';
import Loader from '../../ui/Loader/Loader';

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const { user, loading } = useAuth();

  if (loading) return <Loader />;
  if (!user)  return <Navigate to="/login" replace />;
  return children;
};

export default RequireAuth
