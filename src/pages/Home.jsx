import playIcon from "../assets/icons/circled-play.png";

const Home = () => {
  return (
    <section className="bg-primary text-white h-screen">
      <header className="container py-7 relative z-10">
        <nav className="flex justify-between">
          <div>
            <a href="/" className="font-semibold text-base md:text-lg leading-4">
              Dreamcatcher
            </a>
          </div>
          <div>
            <button className="font-semibold text-sm">Menu</button>
          </div>
        </nav>
      </header>
      {/* BG Image */}
      <div className="absolute inset-0 bg-hero-banner bg-contain bg-no-repeat bg-center opacity-30 grayscale"></div>
      {/* Content */}
      <div className="absolute inset-0 container flex flex-col justify-center">
        <div>
          <div className="flex justify-between uppercase text-accent font-medium text-sm md:text-base">
            <p>dream</p>
            <p>of</p>
            <p>me</p>
          </div>
          <div>
            <h1 className="uppercase text-[2.75rem] md:text-[5.45rem] font-bold text-center">
              dreamcatcher
            </h1>
          </div>
          <div className="flex justify-center gap-10 items-center mt-3">
            <div>
              <a href="#" className="flex items-center uppercase text-base md:text-2xl font-medium tracking-tight gap-2.5">
                <img src={playIcon} alt="icon play" className="w-10 md:w-16" />
                justice
              </a>
            </div>
            <div className="flex items-end gap-4">
              <p className="text-accent text-3xl md:text-5xl font-bold">VirtuouS</p>
              <p className="text-xs md:text-base mb-[5px]">10th Mini Album</p>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="absolute bottom-8 md:bottom-10 container">
        <div className="flex justify-between items-end">
          <div>
            <p className="text-sm">&copy; 2024 Dreamcatcher Company. All Rights Reserved</p>
          </div>
          <div className="w-1/3">
            <p className="text-sm font-semibold leading-5">In Dreamcatcher's story and lore, each member represent a different nightmare or fear. Diokophobia, Merinthophobia, Claustrophobia, Scopophobia, Mazeophobia, Agliophobia, Basophobia</p>
          </div>
          <div className="md:hidden">
            <p className="text-accent text-md">&copy; 2024</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
