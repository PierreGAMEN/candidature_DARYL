import Description from "./Description/Description";
import "./about.scss";

const About = () => {
  return (
    <section id="about" className="container_about">
      <div className="container_about_title">
        <div className="divider"></div>
        <h2>A propos</h2>
      </div>
      <div className="container_about_description">
        <Description
          title="Histoire"
          color1="blue"
          color2="lightblue"
          p1="Rien ne m'enthousiasme plus que de transformer une idée en réalité concrète. L'entrepreneuriat a toujours été une source de motivation pour moi. J'ai réalisé une école de commerce spécialisée dans l'entrepreneuriat pour comprendre le fonctionnement d'une entreprise sur son marché. Durant mes études, j'ai rejoint Decathlon, où j'ai appris en réalisant des projets concrets."
          p2="J'ai toujours été passionné par le digital. D'abord simple consommateur des possibilités offertes par le web, les réseaux sociaux et les jeux vidéo, j'ai récemment franchi le pas pour devenir un créateur dans ce domaine.Devenir développeur web est l'un des moyens les plus simples pour concrétiser une idée et entreprendre. Un IDE, quelques vidéos sur youtube et nous voilà parti pour un long voyage. Voilà ce que j'aime dans ce projet de vie, son accessibilité."
          p3="Pour moi, se lancer signifiait m'engager à 100%. J'ai donc choisi de suivre une formation à plein temps dispensée par l'organisme de formation O'Clock, afin d'obtenir le titre de développeur Web Full-Stack."
          subtitle="Développeur web, du rêve à la réalité"
        />
        <Description
          title="Valeurs"
          color1="color_33a1fd"
          color2="color_008afc"
          p1="Si quelqu'un de mon entourage devait me décrire, il dirait probablement que je suis enthousiaste, bienveillant et consciencieux."
          p2="Mon dernier test de personnalité indique que je suis un ESTJ, ce qui correspond à la personnalité de 'Directeur'. Cela signifie que je suis attaché aux valeurs d'honnêteté, de dévouement et de dignité. Fiers de rassembler les gens, les Directeurs jouent souvent le rôle d'organisateurs, s'efforçant de fédérer tout le monde."
          p3="Je crois fermement que ces qualités me rendent apte à contribuer efficacement à une équipe. Mon enthousiasme me pousse à toujours donner le meilleur de moi-même, ma bienveillance favorise un environnement de travail harmonieux, et ma conscience professionnelle garantit que chaque tâche est menée à bien avec rigueur. Combinées à mon profil ESTJ, ces caractéristiques font de moi un atout pour tout projet nécessitant rigueur et organisation, le tout dans la bonne humeur et le partage."
          subtitle="Enthousiaste, bienveillant et consciencieux"
        />
        <Description
          title="Carrière"
          color1="color_4d6688"
          color2="color_21406a"
          p1="Dans un premier temps, mon objectif est de prendre de l'expérience en tant que développeur. Je considère ce rôle comme une porte d'entrée essentielle pour la gestion de projets digitaux. "
          p2="Passionné par la construction et par l'encadrement d'équipes, mon objectif à moyen terme est d'évoluer vers le poste de lead développeur." 
          p3="À long terme, le poste de CTO m'attire car il ouvre la voie à des projets encore plus ambitieux et à une gestion à un niveau macroscopique. C'est un défi stimulant que j'aimerai un jour vivre."
          subtitle="Une carrière digitale"
        />
      </div>
    </section>
  );
};

export default About;
