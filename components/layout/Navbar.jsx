import Image from 'next/image';
import NavLink from '../ui/NavLink/NavLink';

const Navbar = () => {
  return (
    <nav className="bg-amber-600 p-5">
      <Image
        src={'images/logo.svg'}
        alt='Brand Logo "D07 Movie & TV DB"'
        width={1024}
        height={1024}
      />
      <NavLink href={'/'}>Home</NavLink>
      <NavLink href={'/login'}>Login</NavLink>
      <NavLink href={'/register'}>Register</NavLink>
    </nav>
  );
};

export default Navbar;
