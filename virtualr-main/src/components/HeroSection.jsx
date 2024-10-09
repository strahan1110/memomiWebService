

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Captura memorias para los novios
      </h1>
      <p className="mt-7 text-lg text-center text-neutral-500 max-w-4xl">
        Un click de recuerdos
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
        >
          Ingresa a tu sesión
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
