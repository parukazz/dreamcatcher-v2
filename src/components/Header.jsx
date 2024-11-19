const Header = ({ toggleMenu, isOpen, id }) => {
  return (
    <header id={id} className={`container py-7 relative z-50`}>
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
          <button
            onClick={toggleMenu}
            className="font-semibold text-sm lg:text-base"
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
