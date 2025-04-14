'use client';
import NavLink from '@/components/ui/NavLink/NavLink';
import { useAuth } from '@/context/AuthProvider';

const Auth = () => {
  const { user, setUser } = useAuth();

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };
  return (
    <aside className="">
      {!user && <NavLink href={'/login'}>Login</NavLink>}
      {user && (
        <span
          onClick={handleLogout}
          className="text-brand-text-primary hover:text-brand-primary cursor-pointer font-normal underline-offset-4 duration-500 ease-in-out hover:scale-110 hover:font-semibold hover:underline md:text-lg">
          Logout
        </span>
      )}
    </aside>
  );
};

export default Auth;
