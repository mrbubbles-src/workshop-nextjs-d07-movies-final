'use client';
import { useAuth } from '@/context/AuthProvider';
import Link from 'next/link';

const Auth = () => {
  const { user, setUser } = useAuth();

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };
  return (
    <aside className="">
      {!user && <Link href={'/login'}>Login</Link>}
      {user && <span onClick={handleLogout}>Logout</span>}
    </aside>
  );
};

export default Auth;
