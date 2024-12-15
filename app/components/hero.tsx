// components/Hero.tsx
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative flex h-screen w-screen flex-col items-center justify-center bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 px-4 text-center sm:px-8">
      <div className="max-w-lg">
        <Image
          src="/mgc.png" 
          alt="MGC Logo"
          width={200}
          height={200}
          priority
          className="mx-auto drop-shadow-3xl "
        />
        <h1 className="mt-4 text-3xl font-extrabold text-gray-800 sm:text-4xl lg:text-5xl">
          Welcome to <span className="text-blue-500 ">MGC</span>
        </h1>
        <p className="mt-2 text-base text-gray-600 sm:text-lg lg:text-xl">
          Your gateway to innovation and excellence
        </p>
      </div>
    </section>
  );
};

export default Hero;
