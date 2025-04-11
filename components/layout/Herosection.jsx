import Link from 'next/link';

const Herosection = () => {
  return (
    <header>
      <div>
        <h1>Die D07 Movie & TV DB – Einfach suchen, merken, anschauen.</h1>
        <p>
          Durchsuche eine riesige Auswahl an Filmen & Serien mit nur einem Klick
          und füge deine Favoriten zu deiner Watchlist hinzu.
        </p>
        <Link href={'#search'}>Jetzt entdecken</Link>
      </div>
    </header>
  );
};

export default Herosection;
