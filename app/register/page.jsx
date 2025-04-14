import AuthForm from '@/components/auth/AuthForm';
import Link from 'next/link';

export const metadata = {
  title: 'Registrierung | D07 Movie & TV DB',
  description: 'Registriere dich und verwalte deine Watchlist.',
  openGraph: {
    title: 'D07 Movie & TV DB',
    description:
      'Die ultimative Sammlung für Filme und Serien – einfach suchen, merken, Lieblingsfilme sammeln.',
    images: [
      {
        url: '/images/logo.svg',
        width: 1200,
        height: 630,
        alt: 'D07 Movie & TV DB Hero',
      },
    ],
    type: 'website',
    locale: 'de_DE',
  },
};

const RegisterPage = () => {
  return (
    <>
      <section className="p-3">
        <AuthForm type={'register'} />
      </section>
      <Link
        href={'/login'}
        className="text-brand-secondary hover:text-brand-primary place-self-center font-bold text-pretty underline-offset-4 transition-all duration-300 ease-in-out hover:underline">
        Du hast schon einen Account? Hier geht es zum Login!
      </Link>
    </>
  );
};

export default RegisterPage;
