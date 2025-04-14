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
          ? 'text-brand-primary scale-110 cursor-pointer font-semibold underline underline-offset-4 duration-500 ease-in-out md:text-lg'
          : 'text-brand-text-primary hover:text-brand-primary cursor-pointer font-normal underline-offset-4 duration-500 ease-in-out hover:scale-110 hover:font-semibold hover:underline md:text-lg'
      }>
      {children}
    </Link>
  );
};

export default NavLink;
