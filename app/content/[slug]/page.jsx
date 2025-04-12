'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';

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
    return <p>Loading...</p>;
  }
  if (!detailData) return <p>Nothing found.</p>;
  const {
    Actors,
    Awards,
    BoxOffice,
    Country,
    Director,
    Genre,
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
      <section>
        <h1>{Title}</h1>
        <article className="relative aspect-[2/3] w-[20rem]">
          <Image src={Poster} alt={`${Title}-Poster`} fill sizes="100%" />
        </article>
        <article>
          <p>
            <span className="font-bold">Erschienen:</span> {releaseInfo}
          </p>
          <p>
            <span className="font-bold">Erscheinungsland:</span> {Country}
          </p>
          <p>
            <span className="font-bold">Sprache:</span> {Language}
          </p>
          <p>
            <span className="font-bold">Regie:</span> {Director}
          </p>
          <p>
            <span className="font-bold">Drehbuch:</span> {Writer}
          </p>
          <p>
            <span className="font-bold">Schauspieler:</span> {Actors}
          </p>
        </article>
        <article>
          <p>
            <span className="font-bold">Genre:</span> {Genre}
          </p>
          <p>
            <span className="font-bold">Alterseinstufung:</span> {Rated}
          </p>
          <p>
            <span className="font-bold">Laufzeit:</span> {Runtime}
          </p>
        </article>
        <article>
          <p>
            <span className="font-bold">Bewertungen:</span> {Rated}
          </p>
          <p>
            <span className="font-bold">Auszeichnungen:</span> {Awards}
          </p>
          <p>
            <span className="font-bold">Boxoffice:</span> {BoxOffice}
          </p>
        </article>
        <article>
          <h3 className="font-bold">Kritiken:</h3>
          {Ratings?.map((rating) => (
            <p key={rating.Source}>
              <span>{rating.Source}</span> - <span>{rating.Value}</span>
            </p>
          ))}
        </article>
        <article>
          <h3 className="font-bold">Handlung:</h3>
          <p>{Plot}</p>
        </article>
      </section>
    </>
  );
};

export default ContentDetailPage;
