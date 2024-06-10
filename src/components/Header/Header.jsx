import "./header.scss";

const Header = () => {
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
          <div className="container-language">
            <img
              src="https://static.parastorage.com/services/linguist-flags/1.663.0/assets/flags/corner/FRA.png"
              alt="drapeau français"
            />
            <button className="material-symbols-rounded">
              keyboard_arrow_down
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
