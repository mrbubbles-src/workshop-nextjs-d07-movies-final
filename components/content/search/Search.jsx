'use client';

import { useSearch } from '@/context/SearchProvider';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/navigation';

const Search = () => {
  const { searchValue, setSearchValue } = useSearch();
  const router = useRouter();
  const submitHandler = (e) => {
    e.preventDefault();
    router.push('/search');
  };
  return (
    <section id="search" className="p-3">
      <form onSubmit={submitHandler} className="flex justify-center">
        <input
          type="search"
          name="search"
          placeholder="z. B. The Matrix"
          id="search-input"
          autoComplete="off"
          className="shadow-brand-primary focus:shadow-brand-secondary bg-brand-card text-brand-highlight placeholder:text-brand-highlight/60 w-full p-2 font-bold shadow-md focus:shadow-lg focus:outline-none lg:w-[70rem]"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button type="submit" className="text-brand-secondary p-2">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>
    </section>
  );
};

export default Search;
