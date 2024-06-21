import { useRef } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { TbHexagonLetterJ } from "react-icons/tb";

import "./Header.scss";

function Header() {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  const close = () => {
    navRef.current.classList.remove("responsive_nav");
  };
  return (
    <header className="header">
      <div className="container">
        <a className="logo" href="">
          <TbHexagonLetterJ />
        </a>
        <nav ref={navRef}>
          <a onClick={close} href="#heroSec">
            Home
          </a>
          <a onClick={close} href="#About">
            About
          </a>
          <a onClick={close} href="#Service">
            Services
          </a>
          <a onClick={close} href="#Skill">
            Skills
          </a>
          <a onClick={close} href="#Projects">
            Works
          </a>
          <buttton className="nav-btn nav-close-btn" onClick={showNavbar}>
            <IoClose />
          </buttton>
        </nav>
        <button className="nav-btn btn-open" onClick={showNavbar}>
          <IoMdMenu />
        </button>
        <a className="contact" href="#Contactsec">
          Contact
        </a>
      </div>
    </header>
  );
}

export default Header;
