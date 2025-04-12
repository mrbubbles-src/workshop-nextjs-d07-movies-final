import PopularNow from '@/components/content/PopularNow';
import Herosection from '@/components/layout/Herosection';
import Search from '@/components/content/search/Search';
import SearchResults from '@/components/content/search/SearchResults';

export default function Home() {
  return (
    <>
      <Herosection />
      <Search />
      <SearchResults preview={true} />
      <PopularNow type={'movies'} />
      <PopularNow type={'tvShows'} />
    </>
  );
}
