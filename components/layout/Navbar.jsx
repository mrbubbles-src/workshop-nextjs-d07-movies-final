import Image from 'next/image';
import NavLink from '../ui/NavLink/NavLink';

const Navbar = () => {
  return (
    <nav className="flex flex-wrap place-items-center gap-5 bg-amber-600 p-5">
      <aside className="relative h-20 w-40">
        <Image
          src={'/images/logo.svg'}
          alt='Brand Logo "D07 Movie & TV DB"'
          fill
          sizes="100%"
        />
      </aside>
      <NavLink href={'/'}>Home</NavLink>
      <NavLink href={'/search'}>Search</NavLink>
      <NavLink href={'/content'}>Content</NavLink>
      <NavLink href={'/content/slug'}>Content Slug</NavLink>
      <NavLink href={'/login'}>Login</NavLink>
      <NavLink href={'/register'}>Register</NavLink>
    </nav>
  );
};

export default Navbar;
