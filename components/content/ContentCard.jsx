import Image from 'next/image';

const ContentCard = ({ data }) => {
  return (
    <article className="mr-4 inline-block w-[12rem] sm:w-[14rem]">
      <h3>{data.Title}</h3>
      <div>
        <Image
          src={data.Poster}
          alt={`"${data.Title}"-Poster`}
          className="object-cover"
          width={300}
          height={444}
        />
      </div>
    </article>
  );
};

export default ContentCard;
