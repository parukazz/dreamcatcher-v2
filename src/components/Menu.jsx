import { listMenu } from "../constant";

const Menu = ({ theme }) => {
  return (
    <div
      id="menuBox"
      className={`absolute inset-0 bg-primary z-10 ${theme}`}
    >
      <ul className="w-full h-full uppercase font-bold text-3xl md:text-5xl lg:text-6xl 2xl:text-7xl flex flex-col justify-center items-center gap-1 md:gap-4 lg:gap-3">
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
  );
};

export default Menu;
