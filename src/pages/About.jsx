import Navbar from "../components/Navbar";
import { members } from "../constant";
import mainPhoto from "../assets/img/profile-group.webp";

const About = () => {
  return (
    <main className="bg-white">
      <Navbar theme={"bg-white text-primary"} />
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="uppercase font-extrabold text-[44px] tracking-tight mb-6">
            dreamcatcher
          </h1>
          <div className="flex flex-wrap gap-x-9 gap-y-7 justify-center">
            {members.map((member) => (
              <div key={member.id}>
                <p className="uppercase font-bold text-sm tracking-tight">
                  {member.name}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="">
          <img src={mainPhoto} alt="Group Photo" className="w-full" />
        </div>
      </div>
    </main>
  );
};

export default About;
