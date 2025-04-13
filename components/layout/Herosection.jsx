import Link from 'next/link';

const Herosection = () => {
  return (
    <header className="bg-brand-success flex flex-col place-items-center px-[clamp(1rem,5vw,5rem)] py-[clamp(2rem,10vw,10rem)] text-pretty">
      <article className="flex flex-col gap-5 md:max-w-[75vw] lg:max-w-[55vw]">
        <section>
          <h1 className="text-[clamp(2.6rem,6vw,5.2rem)] font-bold">
            D07 Movie & TV DB
          </h1>
          <h2 className="text-[clamp(1.3rem,3vw,2.6rem)] font-bold">
            Einfach suchen, merken, anschauen.
          </h2>
        </section>
        <section>
          <p className="text-[clamp(1.1rem,3vw,2rem)]">
            Durchsuche eine riesige Auswahl an Filmen & Serien mit nur einem
            Klick und füge deine Favoriten zu deiner Watchlist hinzu.
          </p>
        </section>
        <Link
          href="#search"
          className="w-fit rounded-md bg-green-400 px-[clamp(1rem,2.5vw,2rem)] py-[clamp(0.5rem,1.5vw,1rem)] text-[clamp(1rem,2vw,1.5rem)] font-bold text-white transition-colors hover:bg-green-500">
          Jetzt entdecken
        </Link>
      </article>
    </header>
  );
};

export default Herosection;
