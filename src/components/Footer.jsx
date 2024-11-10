const Footer = () => {
  return (
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
            In Dreamcatcher's story and lore, each member represent a different
            nightmare or fear. Diokophobia, Merinthophobia, Claustrophobia,
            Scopophobia, Mazeophobia, Agliophobia, Basophobia
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
