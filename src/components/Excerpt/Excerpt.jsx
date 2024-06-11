/* eslint-disable react/no-unescaped-entities */
import "./excerpt.scss";

const Excerpt = () => {
  return (
    <section id="excerpt" className="container_excerpt">
      <div className="container_excerpt_text">
        <div className="divider"></div>
        <h2>Qui suis-je ?</h2>
        <p>Je m'apelle Pierre GAMEN et je suis développeur fullstack.</p>
        <p>
          Avant d'être développeur, j'ai travaillé chez Decathlon pendant près
          de 10 ans. D'abord en tant que vendeur, puis rapidement en tant que
          responsable de rayon. J'ai commencé sur une équipe de 7 personnes puis
          j'ai animé jusqu'à 25 collaborateurs en lien direct. J'ai continué à
          évoluer pour terminer sur des postes de direction avec une centaine de
          collaborateurs en animation indirect et une une dizaine en animation
          directe dont des cadres.
        </p>
        <p>
          Amoureux de la montagne, je la pratique aussi régulièrement que je le
          peux avec une préférence ces 10 dernières années pour la pratique de
          l'escalade.
        </p>
        <p>
          Amoureux de la technologie, j'ai toujours eu un oeil sur celle-ci.
          L'envie de comprendre son fonctionnement mais surtout l'envie
          d'imaginer les possiblités pour l'être humain. J'ai fait le souhait de
          me convertir, en partie, pour ne plus être spéctateur mais être acteur
          de ce monde en mouvement.
        </p>
      </div>
    </section>
  );
};

export default Excerpt;
