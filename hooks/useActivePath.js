import { usePathname } from 'next/navigation';

export const useActivePath = () => {
  const pathname = usePathname();

  return (path) => {
    if (path === '/') {
      return pathname === '/';
    }

    return pathname === path || pathname.startsWith(path + '/');
  };
};
