'use client';

import { useAuth } from '@/context/AuthProvider';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import ContentCard from './ContentCard';
import { useEffect } from 'react';

const UserDashboard = () => {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/login');
    }
  }, [user, isLoading]);

  if (isLoading) return null;

  if (!user) return null;

  if (user.watchlist.length === 0) {
    return (
      <section>
        <h1>Willkommen zurück, {user.username}!</h1>
        <article>
          <p>Deine Watchlist scheint noch leer zu sein ☹️</p>
          <Link href={'/search'}>Schau doch mal in unsere Suche!</Link>
        </article>
      </section>
    );
  }
  return (
    <section>
      <h1>Willkommen zurück, {user.username}!</h1>
      <article>
        <h2>Hier ist deine Watchlist:</h2>
        {user?.watchlist &&
          user.watchlist.map((item) => (
            <ContentCard key={item.imdbID} data={item} />
          ))}
      </article>
    </section>
  );
};

export default UserDashboard;
