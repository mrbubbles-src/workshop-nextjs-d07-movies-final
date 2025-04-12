import Image from 'next/image';
import Link from 'next/link';

const ContentCard = ({ data }) => {
  return (
    <article className="rounded-sm bg-amber-200 p-2 shadow-lg">
      <section className="aspect-[2/3] w-full">
        <Link
          href={`/content/${data.imdbID}`}
          className="relative block h-full w-full">
          <Image
            src={data.Poster}
            alt={`"${data.Title}"-Poster`}
            className="rounded-md object-cover shadow-sm"
            unoptimized
            fill
            sizes="100vw"
          />
        </Link>
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
