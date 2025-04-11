import PopularNow from '@/components/content/PopularNow';
import Herosection from '@/components/layout/Herosection';

export default function Home() {
  return (
    <>
      <Herosection />
      <PopularNow type={'movies'} />
      <PopularNow type={'tvShows'} />
    </>
  );
}
