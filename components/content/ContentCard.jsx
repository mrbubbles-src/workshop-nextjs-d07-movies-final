import Image from 'next/image';
import Link from 'next/link';
import FavoriteButton from '../ui/FavoriteButton';

const ContentCard = ({ data }) => {
  return (
    <article className="bg-brand-card rounded-sm p-2 shadow-lg">
      <section className="relative aspect-[2/3] w-full">
        <Link
          href={`/content/${data.imdbID}`}
          className="relative block h-full w-full">
          <Image
            src={
              data.Poster === 'N/A'
                ? '/images/image-not-found.png'
                : data.Poster
            }
            alt={data.Title}
            className="rounded-md object-cover shadow-sm"
            unoptimized
            fill
            sizes="100vw"
          />
        </Link>
        <FavoriteButton
          data={{
            imdbID: data.imdbID,
            Poster: data.Poster,
            Title: data.Title,
            Released: data.Released,
            Year: data.Year,
          }}
        />
        <aside className="absolute top-2 left-2 z-20 flex flex-wrap gap-2">
          {data.genre &&
            data.Genre.split(',').map((genre) => {
              return (
                <span className="rounded-md bg-amber-200 p-1 text-sm font-bold shadow-lg">
                  {genre}
                </span>
              );
            })}
        </aside>
      </section>
      <section className="mt-1">
        <Link
          href={`/content/${data.imdbID}`}
          title={data.Title}
          className="font-bold underline underline-offset-3">
          {data.Title.length >= 26
            ? `${data.Title.slice(0, 34)}...`
            : data.Title}
        </Link>
        <p className="">
          Erstveröffentlichung:{' '}
          <span className="">
            {data.Released && data.Released !== 'N/A'
              ? data.Released
              : data.Year}
          </span>
        </p>
      </section>
    </article>
  );
};

export default ContentCard;
