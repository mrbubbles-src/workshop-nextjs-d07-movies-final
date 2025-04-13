'use client';

import { useAuth } from '@/context/AuthProvider';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import ContentCard from './ContentCard';
import { useEffect } from 'react';
import PopularNow from './PopularNow';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/Carousel/carousel';

const UserDashboard = () => {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/login');
    }
  }, [user, isLoading]);

  if (isLoading) return null;

  if (user.watchlist.length === 0) {
    return (
      <section>
        <h1>Willkommen zurück, {user.username}!</h1>
        <article>
          <p>Deine Watchlist scheint noch leer zu sein ☹️</p>
          <Link href={'/search'}>Schau doch mal in unsere Suche!</Link>
        </article>
        <article>
          <PopularNow type={'movies'} />
          <PopularNow type={'tvShows'} />
        </article>
      </section>
    );
  }
  return (
    <>
      <section>
        <h1>Willkommen zurück, {user.username}!</h1>
        {user.watchlist && (
          <article>
            <h2>Hier ist deine Watchlist:</h2>
            <Carousel opts={{ align: 'start', loop: true }}>
              <CarouselContent>
                {user.watchlist.map((item) => (
                  <CarouselItem
                    key={item.imdbID}
                    className="max-w-xs shrink-0 grow-0 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                    <ContentCard key={item.imdbID} data={item} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 z-10" />
              <CarouselNext className="right-2 z-10" />
            </Carousel>
          </article>
        )}
      </section>
      <article>
        <PopularNow type={'movies'} />
        <PopularNow type={'tvShows'} />
      </article>
    </>
  );
};

export default UserDashboard;
