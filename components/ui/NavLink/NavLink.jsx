'use client';
import { useActivePath } from '@/hooks/useActivePath';
import Link from 'next/link';

const NavLink = ({ href, children }) => {
  const isActive = useActivePath();
  return (
    <Link
      href={href}
      className={
        isActive(href)
          ? 'text-steel-blue-50 scale-110 font-semibold underline underline-offset-4 duration-500 ease-in-out'
          : 'text-steel-blue-50 font-normal duration-500 ease-in-out hover:scale-110 hover:font-semibold hover:underline hover:underline-offset-4'
      }>
      {children}
    </Link>
  );
};

export default NavLink;
