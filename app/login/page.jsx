import AuthForm from '@/components/auth/AuthForm';
import Link from 'next/link';

export const metadata = {
  title: 'Login | D07 Movie & TV DB',
  description: 'Logge dich ein und verwalte deine Watchlist.',
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

const LoginPage = () => {
  return (
    <>
      <section className="p-3">
        <AuthForm type={'login'} />
      </section>
      <Link
        href={'/register'}
        className="hover:text-brand-primary text-brand-secondary place-self-center font-bold text-pretty underline-offset-4 transition-all duration-300 ease-in-out hover:underline">
        Noch keinen Account? Hier geht es zur Registrierung!
      </Link>
    </>
  );
};

export default LoginPage;
