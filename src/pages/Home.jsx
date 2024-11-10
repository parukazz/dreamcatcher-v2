import playIcon from "../assets/icons/circled-play.png";
import videoHero from "../assets/video/hero-video.mp4";

const Home = () => {
  return (
    <section className="bg-primary text-white h-screen">
      <header className="container py-7 relative z-10">
        <nav className="flex justify-between">
          <div>
            <a
              href="/"
              className="font-semibold text-base md:text-lg xl:text-xl leading-4"
            >
              Dreamcatcher
            </a>
          </div>
          <div>
            <button className="font-semibold text-sm lg:text-base">Menu</button>
          </div>
        </nav>
      </header>
      {/* BG Image */}
      {/* <div className="absolute inset-0 bg-hero-banner bg-contain lg:bg-cover bg-no-repeat bg-center opacity-30 grayscale"></div> */}
      <div className="absolute inset-0 grayscale">
        <video src={videoHero} autoPlay muted loop className="w-full h-full object-cover" />
        <div className="absolute inset-0 w-full h-full bg-primary opacity-60"></div>
      </div>
      {/* Content */}
      <div className="absolute inset-0 container flex flex-col justify-center">
        <div className="2xl:w-[1533px] mx-auto">
          <div className="xl:-mb-10 flex justify-between uppercase text-accent font-medium text-sm md:text-base">
            <p>dream</p>
            <p>of</p>
            <p>me</p>
          </div>
          <div>
            <h1 className="uppercase text-[2.75rem] md:text-[5.45rem] lg:text-[7rem] xl:text-[10rem] 2xl:text-[11.875rem] font-bold text-center">
              dreamcatcher
            </h1>
          </div>
          <div className="flex justify-center gap-10 xl:gap-16 items-center mt-3 xl:mt-0 2xl:-mt-5">
            <div>
              <a
                href="#"
                className="flex items-center uppercase text-base md:text-2xl xl:text-4xl font-medium tracking-tight gap-2.5"
              >
                <img
                  src={playIcon}
                  alt="icon play"
                  className="w-10 md:w-16 xl:w-20"
                />
                justice
              </a>
            </div>
            <div className="flex items-end gap-4">
              <p className="text-accent text-3xl md:text-5xl xl:text-6xl font-bold">
                VirtuouS
              </p>
              <p className="text-xs md:text-base mb-[5px]">10th Mini Album</p>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="absolute bottom-8 md:bottom-10 lg:bottom-5 container">
        <div className="flex justify-between items-end flex-row-reverse md:flex-row">
          <div className="hidden md:block">
            <p className="text-sm">
              &copy; 2024 Dreamcatcher Company. All Rights Reserved
            </p>
          </div>
          <div className="md:hidden xl:block">
            <p className="text-accent text-md xl:text-5xl xl:font-bold">
              &copy;2024
            </p>
          </div>
          <div className="w-2/3 md:w-1/3">
            <p className="text-sm font-semibold leading-5">
              In Dreamcatcher's story and lore, each member represent a
              different nightmare or fear. Diokophobia, Merinthophobia,
              Claustrophobia, Scopophobia, Mazeophobia, Agliophobia, Basophobia
            </p>
          </div>
        </div>
      </div>

      {/* List Menu */}

    </section>
  );
};

export default Home;
