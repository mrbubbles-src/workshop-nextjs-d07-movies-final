'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import FavoriteButton from '@/components/ui/FavoriteButton';
import LoadingIndicator from '@/components/ui/LoadingIndicator';

const ContentDetailPage = () => {
  const { slug } = useParams();
  const [loading, setLoading] = useState(false);
  const [detailData, setDetailData] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      setLoading(true);
      const URL = 'https://www.omdbapi.com/?';
      const API_KEY = '1e3a687b';
      try {
        const res = await fetch(`${URL}i=${slug}&apikey=${API_KEY}`);
        const data = await res.json();
        setDetailData(data || null);
      } catch (err) {
        console.error('Fehler bei der Suche.', err);
      } finally {
        setLoading(false);
      }
    };
    if (slug) fetchDetails();
  }, [slug]);

  if (loading) {
    return <LoadingIndicator />;
  }
  if (!detailData) return <p>Nothing found.</p>;
  const {
    Actors,
    Awards,
    BoxOffice,
    Country,
    Director,
    Genre,
    imdbID,
    Language,
    Plot,
    Poster,
    Rated,
    Ratings,
    Released,
    Runtime,
    Title,
    Writer,
    Year,
  } = detailData;

  const releaseInfo = Released !== 'N/A' ? Released : Year;

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 py-12 text-pretty sm:px-6">
        <h1 className="text-brand-primary mb-8 text-center text-3xl font-bold lg:text-left">
          {Title}
        </h1>
        <section className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(auto,400px)_1fr]">
          <article className="relative mx-auto aspect-[2/3] w-full max-w-xs justify-self-center lg:mx-0 lg:max-w-sm lg:justify-self-start">
            <Image
              src={Poster === 'N/A' ? '/images/image-not-found.png' : Poster}
              alt={Title}
              fill
              sizes="100%"
              className="shadow-brand-primary rounded-md object-cover shadow-lg"
            />
            <FavoriteButton
              data={{
                imdbID,
                Poster,
                Title,
                Released,
                Year,
              }}
            />
          </article>
          <section className="flex-1 space-y-6 px-2 text-center sm:px-4 lg:text-left">
            <article className="space-y-1">
              <h3 className="text-brand-primary mb-2 text-xl font-bold">
                Informationen:
              </h3>
              <ul>
                <li className="flex flex-col">
                  <span className="text-brand-secondary font-bold">
                    Erschienen:
                  </span>
                  {releaseInfo}
                </li>
                <li className="flex flex-col">
                  <span className="text-brand-secondary font-bold">
                    Erscheinungsland:
                  </span>
                  {Country}
                </li>
                <li className="flex flex-col">
                  <span className="text-brand-secondary font-bold">
                    Sprache:
                  </span>
                  {Language}
                </li>
                <li className="flex flex-col">
                  <span className="text-brand-secondary font-bold">Regie:</span>
                  {Director}
                </li>
                <li className="flex flex-col">
                  <span className="text-brand-secondary font-bold">
                    Drehbuch:
                  </span>
                  {Writer}
                </li>
                <li className="flex flex-col">
                  <span className="text-brand-secondary font-bold">
                    Schauspieler:
                  </span>
                  {Actors}
                </li>
              </ul>
            </article>
            <article className="space-y-1">
              <ul>
                <li className="flex flex-col">
                  <span className="text-brand-secondary font-bold">Genre:</span>
                  {Genre}
                </li>
                <p className="flex flex-col">
                  <span className="text-brand-secondary font-bold">
                    Alterseinstufung:
                  </span>
                  {Rated}
                </p>
                <li className="flex flex-col">
                  <span className="text-brand-secondary font-bold">
                    Laufzeit:
                  </span>
                  {Runtime}
                </li>
              </ul>
            </article>
            <article className="space-y-1">
              <ul>
                <li className="flex flex-col">
                  <span className="text-brand-secondary font-bold">
                    Auszeichnungen:
                  </span>
                  {Awards}
                </li>
                <li className="flex flex-col">
                  <span className="text-brand-secondary font-bold">
                    Boxoffice:
                  </span>
                  {BoxOffice}
                </li>
              </ul>
            </article>
            <article>
              <h3 className="text-brand-primary mb-2 text-xl font-bold">
                Kritiken:
              </h3>
              <ul className="space-y-1">
                {Ratings?.map((rating) => (
                  <li key={rating.Source}>
                    <span className="text-brand-secondary font-bold">
                      {rating.Source}
                    </span>
                    - <span>{rating.Value}</span>
                  </li>
                ))}
              </ul>
            </article>
            <article>
              <h3 className="text-brand-primary mb-2 text-xl font-bold">
                Handlung:
              </h3>
              <p className="leading-relaxed">{Plot}</p>
            </article>
          </section>
        </section>
      </section>
    </>
  );
};

export default ContentDetailPage;
