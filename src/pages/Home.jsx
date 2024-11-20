import playIcon from "../assets/icons/circled-play.png";
import videoHero from "../assets/video/hero-video.mp4";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <main className="bg-primary text-white h-screen">
      <Navbar theme="text-white" />
      {/* BG Image */}
      {/* <div className="absolute inset-0 bg-hero-banner bg-contain lg:bg-cover bg-no-repeat bg-center opacity-30 grayscale"></div> */}
      {/* BG Video */}
      <div className="absolute inset-0 grayscale">
        <video
          src={videoHero}
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
        />
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
            <h1
              id="heading"
              className="uppercase text-[2.75rem] md:text-[5.45rem] lg:text-[7rem] xl:text-[10rem] 2xl:text-[11.875rem] font-bold text-center opacity-0"
            >
              dreamcatcher
            </h1>
          </div>
          <div className="flex justify-center gap-10 xl:gap-16 items-center mt-3 xl:mt-0 2xl:-mt-5">
            <div>
              <a
                href="#"
                className="flex items-center uppercase text-base md:text-2xl xl:text-4xl font-medium tracking-tight gap-2.5 group"
              >
                <img
                  src={playIcon}
                  alt="icon play"
                  className="w-10 md:w-16 xl:w-20 group-hover:scale-105 group-hover:transition"
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
      <Footer />
    </main>
  );
};

export default Home;
