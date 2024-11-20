import { listMenu, socialMedia } from "../constant";

const FooterAllPage = () => {
  return (
    <div className="bg-white text-primary container">
      <div className="py-20 uppercase flex flex-col items-center gap-9">
        <div>
          <h3 className="font-black text-[2rem] leading-8 tracking-tighter">
            dreamcatcher
          </h3>
        </div>
        <div className="w-full">
          <ul className="flex flex-wrap justify-between gap-y-6">
            {listMenu.map((item) => (
              <li key={item.id}>
                <a
                  href={item.link}
                  className="font-semibold text-[10px] leading-4 text-silver hover:text-accent primary-transition"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full">
          <ul className="flex justify-between">
            {socialMedia.map((item) => (
              <li key={item.id}>
                <a href="#">
                  <item.label size={25} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="py-5 flex justify-between font-medium text-[10px] leading-3 border-t-primary border-t-[1px]">
        <p>&copy; 2024 Dreamcather Company. All Rights Reserved</p>
        <p>Built by Paruk Azziyi</p>
      </div>
    </div>
  );
};

export default FooterAllPage;
