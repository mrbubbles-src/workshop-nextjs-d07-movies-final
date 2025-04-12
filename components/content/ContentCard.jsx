import Image from 'next/image';
import Link from 'next/link';

const ContentCard = ({ data }) => {
  return (
    <article>
      <div className="relative aspect-[2/3] w-full">
        <Link href={`/content/${data.imdbID}`}>
          <Image
            src={data.Poster}
            alt={`"${data.Title}"-Poster`}
            className="object-cover"
            fill
            sizes="100vw"
          />
        </Link>
      </div>
      <h3>
        {data.Title} -{' '}
        <span>
          Erstveröffentlichung:{' '}
          {data.Released !== 'N/A' ? data.Released : data.Year}
        </span>
      </h3>
    </article>
  );
};

export default ContentCard;
