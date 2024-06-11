/* eslint-disable react/no-unescaped-entities */
import Figure from "./Figure/Figure";
import "./figures.scss";

const Figures = () => {
  return (
    <section id="figures" className="container_figures">
      <div className="overlay"></div>
      <div className="container_figures_text">
        <div className="divider"></div>
        <h2>Quelques chiffres</h2>
        <div className="container_figures_figure">
          <Figure
            figure="10"
            description="10 ans de carrière professionnelle"
          />
          <Figure
            figure="6"
            description="6 mois de formartion Développeur FullStack avec l'apprentissade de React en spécialisation."
          />
          <Figure
            figure="50"
            description="Projets et mini-projets, allant du Tic-Tac-Toe à un site multipage, multivue et sécurisée."
          />
          <Figure
            figure="1"
            description="Projet de fin de formartion qui regroupe toutes les connaissances fondamentales pour être développeur"
          />
        </div>
      </div>
    </section>
  );
};

export default Figures;
