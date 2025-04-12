'use client';

import { useState, useEffect } from 'react';
import ContentCard from './ContentCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/Carousel/carousel';

const popularMovies = [
  'tt0111161', // The Shawshank Redemption
  'tt0068646', // The Godfather
  'tt0468569', // The Dark Knight
  'tt1375666', // Inception
  'tt0133093', // The Matrix
  'tt0110912', // Pulp Fiction
  'tt0120737', // The Lord of the Rings: The Fellowship of the Ring
  'tt0109830', // Forrest Gump
  'tt0816692', // Interstellar
  'tt0080684', // Star Wars: Episode V - The Empire Strikes Back
];
const popularShows = [
  'tt0903747', // Breaking Bad
  'tt0944947', // Game of Thrones
  'tt1475582', // Sherlock
  'tt2861424', // Rick and Morty
  'tt4574334', // Stranger Things
  'tt7366338', // Chernobyl
  'tt5555260', // This Is Us
  'tt0411008', // Lost
  'tt3032476', // Better Call Saul
  'tt0141842', // The Sopranos
];

const PopularNow = ({ type }) => {
  const imdbIds = type === 'movies' ? popularMovies : popularShows;
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const results = await Promise.all(
          imdbIds.map((id) =>
            fetch(`https://www.omdbapi.com/?i=${id}&apikey=1e3a687b`).then(
              (response) => response.json(),
            ),
          ),
        );

        const filtered = results.filter((result) => result.Response === 'True');
        setItems(filtered);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [type]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Fehler beim Laden 😬</p>;

  return (
    <section>
      <h2 className="mb-4 text-xl font-semibold">
        {type === 'movies' ? 'Beliebte Filme' : 'Beliebte Serien'}
      </h2>
      <Carousel className="p-2" opts={{ align: 'start', loop: true }}>
        <CarouselContent>
          {items.map((item) => (
            <CarouselItem
              key={item.imdbID}
              className="max-w-xs shrink-0 grow-0 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <ContentCard data={item} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 z-10" />
        <CarouselNext className="right-2 z-10" />
      </Carousel>
    </section>
  );
};

export default PopularNow;
