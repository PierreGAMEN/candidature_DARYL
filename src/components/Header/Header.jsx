import { useState } from "react";
import "./header.scss";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <div>
        <img
          src="https://static.wixstatic.com/media/9193e3_392cc0c1c8b248bd9023e599b969aa3b~mv2.png/v1/fill/w_353,h_111,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/daryl-logo.png"
          alt="logo site DARYL social software"
        />
      </div>
      <nav>
        <a href="#">Accueil</a>
        <a href="#">Nos solutions</a>
        <a href="#">A propos</a>
        <a href="#">Contact</a>
        <div>
          <div onClick={() => setOpen(!open)} className={`container_language ${open ? "open_top" : ""}`}>
            <img
              src="https://static.parastorage.com/services/linguist-flags/1.663.0/assets/flags/corner/FRA.png"
              alt="drapeau français"
            />
            <button className={`material-symbols-rounded ${open ? "arrow" : ""}`}>
              {!open ? "keyboard_arrow_down" : "keyboard_arrow_up"}
            </button>
            {open && <div className={`container_language_list ${open ? "open_bottom" : ""}`}>
              <img
              src="https://static.parastorage.com/services/linguist-flags/1.663.0/assets/flags/corner/FRA.png"
              alt="drapeau français"
            />
              </div>}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
