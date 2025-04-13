import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center bg-black p-6 text-center font-mono text-green-400">
      <div className="absolute inset-0 bg-[url('/images/matrix-bg.gif')] bg-cover bg-center" />
      <div className="relative z-10 flex flex-col items-center justify-center p-4">
        <h1 className="mb-4 text-3xl">
          404 – You're outside the known universe.
        </h1>
        <p className="mb-6">
          This route is not part of the simulation. Please choose a valid path.
        </p>
        <Link href="/" className="underline hover:text-green-200">
          Return to reality
        </Link>
      </div>
    </div>
  );
}
