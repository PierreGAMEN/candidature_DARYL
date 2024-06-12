import { useState, useEffect, useRef } from "react";
import "./header.scss";
import "./responsiveHeader.scss";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const burgerRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 960);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current && 
        !menuRef.current.contains(event.target) &&
        !burgerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isOpen]);

  return (
    <header>
      <div>
        <img
          src="https://static.wixstatic.com/media/9193e3_392cc0c1c8b248bd9023e599b969aa3b~mv2.png/v1/fill/w_353,h_111,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/daryl-logo.png"
          alt="logo site DARYL social software"
        />
      </div>
      {!isMobile ? (
        <nav>
          <a href="/">Accueil</a>
          <a href="#solutions">Nos solutions</a>
          <a href="#about">A propos</a>
          <a href="#contact">Contact</a>
          <div>
            <div
              onClick={() => setOpen(!open)}
              className={`container_language ${open ? "open_top" : ""}`}
            >
              <img
                src="https://static.parastorage.com/services/linguist-flags/1.663.0/assets/flags/corner/FRA.png"
                alt="drapeau français"
              />
              <button
                className={`material-symbols-rounded ${open ? "arrow" : ""}`}
              >
                {!open ? "keyboard_arrow_down" : "keyboard_arrow_up"}
              </button>
              {open && (
                <div
                  className={`container_language_list ${
                    open ? "open_bottom" : ""
                  }`}
                >
                  <img
                    src="https://static.parastorage.com/services/linguist-flags/1.663.0/assets/flags/corner/FRA.png"
                    alt="drapeau français"
                  />
                </div>
              )}
            </div>
          </div>
        </nav>
      ) : (
        <div className="burger_menu_container">
          <div ref={burgerRef} className="burger_menu_icon" onClick={toggleMenu}>
            <div className={`line ${isOpen ? "openUp" : ""}`}></div>
            <div className={`line ${isOpen ? "disappear" : ""}`}></div>
            <div className={`line ${isOpen ? "openDown" : ""}`}></div>
          </div>
          {isOpen && (
            <nav ref={menuRef} className="menu">
              <a onClick={toggleMenu} href="/">Accueil</a>
              <a onClick={toggleMenu} href="#solutions">Nos solutions</a>
              <a onClick={toggleMenu} href="#about">A propos</a>
              <a onClick={toggleMenu} href="#contact">Contact</a>
              <div
              onClick={() => setOpen(!open)}
              className={`container_language ${open ? "open_top" : ""}`}
            >
              <img
                src="https://static.parastorage.com/services/linguist-flags/1.663.0/assets/flags/corner/FRA.png"
                alt="drapeau français"
              />
              <button
                className={`material-symbols-rounded ${open ? "arrow" : ""}`}
              >
                {!open ? "keyboard_arrow_down" : "keyboard_arrow_up"}
              </button>
              {open && (
                <div
                  className={`container_language_list ${
                    open ? "open_bottom" : ""
                  }`}
                >
                  <img
                    src="https://static.parastorage.com/services/linguist-flags/1.663.0/assets/flags/corner/FRA.png"
                    alt="drapeau français"
                  />
                </div>
              )}
            </div>
            </nav>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
