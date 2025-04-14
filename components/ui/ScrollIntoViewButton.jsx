'use client';
const ScrollIntoViewButton = () => {
  return (
    <>
      <button
        className="bg-brand-secondary hover:bg-brand-primary shadow-brand-primary hover:shadow-brand-secondary w-fit rounded-md px-[clamp(1rem,2.5vw,2rem)] py-[clamp(0.5rem,1.5vw,1rem)] text-[clamp(1rem,2vw,1.5rem)] font-bold shadow-md transition-colors duration-1000 ease-in-out active:scale-95 active:shadow-none"
        onClick={(e) => {
          e.preventDefault();
          document
            .querySelector('#search')
            ?.scrollIntoView({ behavior: 'smooth' });
        }}>
        Jetzt entdecken
      </button>
    </>
  );
};

export default ScrollIntoViewButton;
