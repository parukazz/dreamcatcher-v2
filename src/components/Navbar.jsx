import { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Header from "./Header";
import Menu from "./Menu";

const Navbar = ({ theme }) => {
  // Hook Menu
  const [isOpen, setIsOpen] = useState(false);

  // GSAP
  useEffect(() => {
    if (isOpen) {
      gsap.from("#menuBox", {
        y: "-100%",
        duration: 1,
        ease: "power2.out",
      });
    }
  }, [isOpen]);

  useGSAP(() => {
    gsap.from("#navbar", {
      y: "-100%",
      opacity: 0,
      duration: 1,
      ease: "power2.inOut",
      onComplete: () => {
        gsap.fromTo(
          "#heading",
          {
            x: "-100",
            opacity: 0,
          },
          {
            x: "0",
            opacity: 1,
            duration: 1.5,
            ease: "power2.out",
          }
        );
      },
    });
  }, []);

  // useGSAP(() => {
  //   gsap.from("#heading", {
  //     x: "-100%",
  //     opacity: 0,
  //     duration: 1,
  //     ease: "power2.inOut",
  //   });
  // }, []);

  // Toggle Menu Handler
  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div>
      <Header toggleMenu={toggleMenu} isOpen={isOpen} id="navbar" />

      {/* List Menu */}
      {isOpen && <Menu theme={theme} />}
    </div>
  );
};

export default Navbar;
