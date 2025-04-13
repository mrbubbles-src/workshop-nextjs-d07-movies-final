import Image from 'next/image';
import NavLink from '../../ui/NavLink/NavLink';
import Link from 'next/link';
import Auth from './Auth';

const Navbar = () => {
  return (
    <nav className="flex flex-wrap items-center justify-between p-5">
      <aside className="h-20 w-40">
        <Link href="/" className="relative block h-full w-full">
          <Image
            src="/images/logo.svg"
            alt='Brand Logo "D07 Movie & TV DB"'
            fill
            priority
            sizes="100%"
          />
        </Link>
      </aside>
      <aside className="flex h-20 w-40 items-center gap-5">
        <NavLink href={'/dashboard'}>Dashboard</NavLink>
        <NavLink href={'/search'}>Suche</NavLink>
      </aside>
      <Auth />
    </nav>
  );
};

export default Navbar;
