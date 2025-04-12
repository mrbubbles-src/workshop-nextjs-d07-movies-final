'use client';

import { useSearch } from '@/context/SearchProvider';
import ContentCard from '../ContentCard';
import Link from 'next/link';

const SearchResults = ({ preview = false }) => {
  const { searchResults } = useSearch();
  const resultsToShow = preview ? searchResults.slice(0, 3) : searchResults;
  // console.log(resultsToShow);
  return (
    <div>
      {resultsToShow.map((result) => (
        <ContentCard
          key={result.imdbID}
          data={result}
          className="max-w-xs shrink-0 grow-0 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
        />
      ))}
      {resultsToShow.length <= 3 && (
        <Link href={'/search'}>Mehr Ergebnisse</Link>
      )}
    </div>
  );
};

export default SearchResults;
