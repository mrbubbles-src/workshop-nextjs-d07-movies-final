import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-neutral-800 py-10 text-sm text-neutral-400">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 sm:flex-row sm:justify-between">
        <div className="space-y-2">
          <div className="relative block h-20 w-40">
            <Image
              src="/images/logo.svg"
              alt='Brand Logo "D07 Movie & TV DB"'
              fill
              priority
              sizes="100%"
            />
          </div>
          <p className="text-base font-semibold">D07 Movie & TV DB</p>
          <p>
            Dies ist eine nicht-kommerzielle Projektseite für Unterrichtszwecke.
          </p>
          <p>
            Erstellt im Rahmen eines Workshops für Teilnehmer:innen der FBW
            WD24D07 Klasse des DCI Digital Career Institutes.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          <div className="space-y-1">
            <p className="font-semibold text-white">Projekt</p>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:underline">
                  Über uns
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  API Infos
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Feedback
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-1">
            <p className="font-semibold text-white">Ressourcen</p>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:underline">
                  GitHub Repo
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  OMDB API
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Next.js Docs
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-1">
            <p className="font-semibold text-white">Rechtliches</p>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:underline">
                  Impressum
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Datenschutz
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Nutzungsbedingungen
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
