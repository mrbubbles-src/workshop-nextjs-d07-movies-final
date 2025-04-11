import AuthForm from '@/components/auth/AuthForm';
import Link from 'next/link';

const RegisterPage = () => {
  return (
    <>
      <AuthForm type={'register'} />
      <Link href={'/login'}>
        Du hast schon einen Account? Hier geht es zum Login!
      </Link>
    </>
  );
};

export default RegisterPage;
