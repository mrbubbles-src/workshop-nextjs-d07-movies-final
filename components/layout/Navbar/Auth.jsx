'use client';
import { useAuth } from '@/context/AuthProvider';
import Link from 'next/link';

const Auth = () => {
  const { user } = useAuth();
  return (
    <aside className="">
      {!user && <Link href={'/login'}>Login</Link>}
      {user && <span>Logout</span>}
    </aside>
  );
};

export default Auth;
