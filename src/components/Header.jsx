const Header = ({ toggleMenu, isOpen }) => {
  return (
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
