import PopularNow from '@/components/content/PopularNow';
import Herosection from '@/components/layout/Herosection';
import Search from '@/components/content/search/Search';
import SearchPreview from '@/components/content/search/SearchPreview';

export default function Home() {
  return (
    <>
      <Herosection />
      <Search />
      <SearchPreview />
      <PopularNow type={'movies'} />
      <PopularNow type={'tvShows'} />
    </>
  );
}
