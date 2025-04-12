'use client';

import { useSearch } from '@/context/SearchProvider';
import { useRouter } from 'next/navigation';

const Search = () => {
  const { loading, setLoading, searchValue, setSearchValue } = useSearch();
  const router = useRouter();
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <section id="search" className="p-3">
      <form onSubmit={submitHandler} className="flex justify-center border-2">
        <input
          type="search"
          name="search"
          placeholder="z. B. The Matrix"
          id="search-input"
          className="w-[30rem] border-2 p-2"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button type="submit" className="border-2 p-2">
          🔎
        </button>
      </form>
    </section>
  );
};

export default Search;
