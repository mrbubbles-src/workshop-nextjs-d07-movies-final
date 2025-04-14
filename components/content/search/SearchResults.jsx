'use client';

import { useSearch } from '@/context/SearchProvider';
import ContentCard from '../ContentCard';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const SearchResults = ({ preview = false }) => {
  const { searchResults } = useSearch();
  const resultsToShow = preview ? searchResults.slice(0, 3) : searchResults;
  const pathname = usePathname();
  return (
    <article className="flex flex-col">
      <section className="flex flex-col justify-center gap-3 p-3 md:flex-row md:flex-wrap md:items-center">
        {resultsToShow.map((result) => (
          <ContentCard key={result.imdbID} data={result} shadow={true} />
        ))}
      </section>

      {pathname !== '/search' &&
        resultsToShow.length > 0 &&
        resultsToShow.length <= 3 && (
          <Link
            className="bg-brand-secondary hover:bg-brand-primary shadow-brand-primary hover:shadow-brand-secondary mt-4 w-fit place-self-center rounded-md px-[clamp(1rem,2.5vw,2rem)] py-[clamp(0.5rem,1.5vw,1rem)] text-[clamp(1rem,2vw,1.5rem)] font-bold text-white shadow-md transition-colors duration-1000 ease-in-out active:scale-95 active:shadow-none"
            href="/search">
            Mehr Ergebnisse
          </Link>
        )}
    </article>
  );
};

export default SearchResults;
