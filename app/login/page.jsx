import AuthForm from '@/components/auth/AuthForm';
import Link from 'next/link';

const LoginPage = () => {
  return (
    <>
      <AuthForm type={'login'} />
      <Link href={'/register'}>
        Noch keinen Account? Hier geht es zur Registrierung!
      </Link>
    </>
  );
};

export default LoginPage;
