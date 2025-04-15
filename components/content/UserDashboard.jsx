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

  if (!user) return null;

  if (user.watchlist?.length === 0) {
    return (
      <section className="mt-4 flex flex-col gap-3">
        <h1 className="text-center text-4xl font-bold text-pretty">
          Willkommen zurück,{' '}
          <span className="text-brand-primary">{user.username}</span>!
        </h1>
        <article className="flex flex-col place-items-center text-lg">
          <p>Deine Watchlist scheint noch leer zu sein ☹️</p>
          <Link
            href={'/search'}
            className="text-brand-secondary hover:text-brand-primary hover:decoration-brand-primary underline-offset-4 transition-all duration-300 ease-in-out hover:underline">
            Schau doch mal in unsere Suche!
          </Link>
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
      <section className="mt-4 flex flex-col gap-3">
        <h1 className="text-center text-4xl font-bold text-pretty">
          Willkommen zurück,{' '}
          <span className="text-brand-primary">{user.username}</span>!
        </h1>
        {user.watchlist && (
          <article className="my-4">
            <h2 className="mb-3 px-2 text-xl font-bold">
              Hier ist deine Watchlist:
            </h2>
            <Carousel
              opts={{ align: 'start', loop: true }}
              className="shadow-brand-primary hover:shadow-brand-secondary shadow-md transition-all duration-500 ease-in-out">
              <CarouselContent>
                {user.watchlist.map((item) => (
                  <CarouselItem
                    key={item.imdbID}
                    className="max-w-xs shrink-0 grow-0 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                    <ContentCard key={item.imdbID} data={item} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="text-brand-text-primary shadow-brand-primary bg-brand-secondary hover:shadow-brand-secondary hover:bg-brand-primary hover:text-brand-text-primary left-2 z-10 cursor-pointer border-none shadow-sm transition-all duration-500 ease-in-out hover:shadow-md" />
              <CarouselNext className="text-brand-text-primary shadow-brand-primary bg-brand-secondary hover:shadow-brand-secondary hover:bg-brand-primary hover:text-brand-text-primary right-2 z-10 cursor-pointer border-none shadow-sm transition-all duration-500 ease-in-out hover:shadow-md" />
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
