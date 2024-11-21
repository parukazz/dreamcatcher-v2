import Navbar from "../components/Navbar";
import { members, socialMedia, streamPlatform } from "../constant";
import mainPhoto from "../assets/img/profile-group.webp";
import FooterAllPage from "../components/FooterAllPage";

const About = () => {
  return (
    <main className="bg-white text-primary">
      <Navbar theme="bg-white text-primary" />

      {/* Group Profile */}
      <div className="container py-20">
        <div className="text-center mb-12 lg:mb-24">
          <h1 className="uppercase font-extrabold text-[40px] md:text-[5.25rem] lg:text-[6.5rem] xl:text-[9rem] tracking-tight mb-6">
            dreamcatcher
          </h1>
          <div className="flex flex-wrap gap-x-9 xl:gap-x-14 gap-y-7 justify-center">
            {members.map((member) => (
              <div key={member.id}>
                <p className="uppercase font-bold text-sm md:text-base lg:text-lg xl:text-2xl tracking-tight">
                  {member.name}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="">
          <img src={mainPhoto} alt="Group Photo" className="w-full" />
        </div>

        <div className="md:px-16 lg:px-36">
          {/* social media */}
          <div className="flex flex-col md:flex-row gap-6 mt-12">
            <div className="flex gap-8 justify-center items-center">
              <p className="font-semibold text-xs xl:text-sm">Social Media</p>
              <ul className="flex gap-6 xl:gap-7 border-primary border-r-[1px] pr-5">
                {socialMedia.map((item) => (
                  <li key={item.id}>
                    <a href="#" className="text-sm xl:text-xl">
                      <item.label />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex gap-8 justify-center">
              <p className="font-semibold text-xs xl:text-sm">Streaming</p>
              <ul className="flex gap-6 xl:gap-7">
                {streamPlatform.map((item) => (
                  <li key={item.id}>
                    <a href="#" className="text-sm xl:text-xl">
                      <item.label />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Profile Description */}
          <div className="mt-10 text-xs md:text-sm lg:text-base leading-6 md:leading-7 lg:leading-8 flex flex-col gap-5">
            <p>
              Dreamcatcher a girl group under Dreamcatcher Company, debuted on
              January 13, 2017 with the single "Nightmare". A "Dream Catcher" is
              an artifact used in Native American culture. It's main structure
              consists of a handmade willow hoop with threads net which
              resembles a spider's web.
            </p>
            <p>
              In Dreamcatcher's story and lore, each member represent a
              different nightmare of fear. <b>Ji U</b> represents the nightmare
              of being chased by a stranger (Diokophobia), <b>Su A</b>{" "}
              represents the nightmare of being tied (Merinthophobia),{" "}
              <b>Siyeon</b> represents the nightmare of being locked in a narrow
              space (Claustrophobia), <b>Handong</b> represents the nightmare of
              being observed (Scopophobia), <b>Yoohyeon</b> represents the
              nightmare of being lost in an unknown place (Mazeophobia),{" "}
              <b>Dami</b> represents the nightmare of being pain or getting hurt
              (Agliophobia), and finally, <b>Gahyun</b> represents the nightmare
              of falling from a high place (Basophobia).
            </p>
          </div>
        </div>
      </div>

      {/* Members Profile */}
      <div className="py-20 bg-primary text-white">
        <div className="container">
          <div>
            <h2 className="font-semibold md:font-bold text-3xl md:text-4xl lg:text-[3.5rem] leading-8 tracking-tight">
              Members
            </h2>
          </div>
          <div className="py-7 md:py-12 xl:py-14">
            <div className="grid grid-rows-4 md:grid-rows-2 grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-14">
              {members.map((item) => (
                <div key={item.id}>
                  <div className="h-[266px] lg:h-[338px] xl:h-[480px] bg-green-300">
                    <img
                      className="h-full w-full object-cover"
                      src={item.photo}
                      alt="member photo"
                    />
                  </div>
                  <div className="mt-10 flex flex-col gap-3 lg:gap-7">
                    <h2 className="font-bold text-3xl xl:text-4xl leading-8 tracking-tight">
                      {item.name}
                    </h2>
                    <p className="font-medium text-[10px] lg:text-xs xl:text-sm">
                      Date of Birth: {item.born}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <FooterAllPage />
    </main>
  );
};

export default About;
