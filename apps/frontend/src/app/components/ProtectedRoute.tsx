import React, { ReactNode, useState, useEffect, Children } from 'react';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

interface Props {
  children: ReactNode;
}

const ProtectedRoute: React.FC<Props> = ({ children }) => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true); // Set loading to true initially

  useEffect(() => {
    const unsubscribe = AuthCheck();
    return () => unsubscribe(); // Cleanup function to unsubscribe
  }, []);

  const AuthCheck = () => {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoading(false);
      } else {
        navigate('/login');
      }
    });
  };

  if (loading) return <p>...loading</p>

  return <>{children}</>
};

export default ProtectedRoute;







