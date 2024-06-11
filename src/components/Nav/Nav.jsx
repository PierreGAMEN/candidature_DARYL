import {useState, useEffect} from "react"
import "./nav.scss";

const Nav = () => {

  const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Fonction pour mettre à jour l'état en fonction de la taille de la fenêtre
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 960); // Modifier la taille selon vos besoins
        };
    
        // Appeler handleResize une fois au montage pour initialiser l'état
        handleResize();
    
        // Ajouter l'événement de redimensionnement
        window.addEventListener("resize", handleResize);
    
        // Nettoyer l'événement de redimensionnement lors du démontage du composant
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);

  const handleMouseEnter = (event) => {
    const pElement = event.target.previousElementSibling;
    pElement.classList.add('hover');
  };

  const handleMouseLeave = (event) => {
    const pElement = event.target.previousElementSibling;
    pElement.classList.remove('hover');
  };

  return (
    <>
      {!isMobile && (
        <nav className="nav_side">
          <div>
            <p>Accueil</p>
            <a href="/" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></a>
          </div>
          <div>
            <p>Qui suis-je</p>
            <a href="#excerpt" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></a>
          </div>
          <div>
            <p>Ma mission</p>
            <a href="#mission" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></a>
          </div>
          <div>
            <p>Mes solutions</p>
            <a href="#solutions" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></a>
          </div>
          <div>
            <p>Chiffres</p>
            <a href="#figures" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></a>
          </div>
          <div>
            <p>A propos</p>
            <a href="#about" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></a>
          </div>
          <div>
            <p>Contact</p>
            <a href="#contact" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></a>
          </div>
        </nav>
      )}
    </>
  );
};

export default Nav;
