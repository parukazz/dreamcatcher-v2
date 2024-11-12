import playIcon from "../assets/icons/circled-play.png";
import videoHero from "../assets/video/hero-video.mp4";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { listMenu } from "../constant";

import { useState } from "react";

const Home = () => {
  // Hook Menu
  const [isOpen, setIsOpen] = useState(true);

<<<<<<< HEAD
  // Ref untuk menu
  const menuRef = useRef(null);
  const menuItemRef = useRef([]);

  // Toggle Menu Handler
=======
>>>>>>> parent of a3c1b08 (add GSAP motion)
  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

<<<<<<< HEAD
  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        menuRef.current,
        {
          height: 0,
        },
        {
          height: "100%",
          duration: 2,
          ease: "power1.inOut",
          onComplete: () => {
            gsap.fromTo(
              menuItemRef.current,
              {
                opacity: 0,
                y: -20,
              },
              {
                opacity: 1,
                y: 0,
                duration: 0.3,
                stagger: 0.1,
                ease: "power2.inOut",
              }
            );
          },
        }
      );
    } else {
      gsap.to(menuRef.current, {
        height: 0,
        duration: 2,
        ease: "power1.inOut",
      });
    }
  }, [isOpen]);

  return (
    <section className="bg-primary text-white h-screen">
      {" "}
      {/* class overflow-hidden itu ditambah ketika menggunakan GSAP */}
=======
  return (
    <section className="bg-primary text-white h-screen">
>>>>>>> parent of a3c1b08 (add GSAP motion)
      <Header toggleMenu={toggleMenu} isOpen={isOpen} />
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
      <Footer />

      {/* List Menu */}
<<<<<<< HEAD
      <div
        ref={menuRef}
        className="absolute inset-0 bg-primary overflow-hidden"
      >
        {" "}
        {/* class overflow-hidden itu ditambah ketika menggunakan GSAP */}
        <ul className="w-full h-full uppercase font-bold text-3xl flex flex-col justify-center items-center gap-1">
          {listMenu.map((item, index) => (
            <li
              key={item.id}
              ref={(el) => (menuItemRef.current[index] = el)}
              className="group"
            >
              <a
                href={item.link}
                className="group-hover:text-accent primary-transition"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
=======
      {isOpen && (
        <div className="absolute inset-0 bg-primary">
          <ul className="w-full h-full uppercase font-bold text-3xl flex flex-col justify-center items-center gap-1">
            {listMenu.map((item) => (
              <li key={item.id} className="group ">
                <a
                  href={item.link}
                  className="group-hover:text-accent primary-transition"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
>>>>>>> parent of a3c1b08 (add GSAP motion)
    </section>
  );
};

export default Home;
