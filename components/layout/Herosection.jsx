import Link from 'next/link';
import ScrollIntoViewButton from '../ui/ScrollIntoViewButton';

const Herosection = () => {
  return (
    <header className="flex aspect-[16/9] w-full flex-col items-center justify-center bg-black bg-[url('/images/hero-bg.png')] bg-cover bg-center bg-no-repeat px-[clamp(1rem,5vw,5rem)] py-[clamp(2rem,10vw,10rem)] text-pretty">
      <article className="flex flex-col gap-5 md:max-w-[80vw] lg:max-w-[55vw]">
        <section>
          <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-bold text-shadow-[0_2px_8px_rgba(0,0,0,1)]">
            D07 Movie & TV DB
          </h1>
          <h2 className="text-[clamp(1.1rem,3vw,2.6rem)] font-bold text-shadow-[0_2px_8px_rgba(0,0,0,1)]">
            Suchen. Merken. Lieblingsfilme sammeln.
          </h2>
        </section>
        <section>
          <p className="text-brand-text-primary text-[clamp(1.1rem,3vw,2rem)]">
            Durchsuche eine riesige Auswahl an Filmen & Serien mit nur einem
            Klick und füge deine Favoriten zu deiner Watchlist hinzu.
          </p>
        </section>
        <ScrollIntoViewButton />
      </article>
    </header>
  );
};

export default Herosection;
