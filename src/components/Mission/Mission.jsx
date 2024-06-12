/* eslint-disable react/no-unescaped-entities */
import "./mission.scss";

const Mission = () => {
  return (
    <section id="mission" className="container_mission">
      {/* <div className="overlay"></div> */}
      <div className="container_mission_text">
        <div className="divider"></div>
        <h2>Ma mission</h2>
        <p>
          Ce site a pour mission de vous convaincre que je pourrai être un bon
          développeur pour votre équipe mais surtout une bonne personne.
        </p>
        <p>
          Ma mission au quotidien est de rendre la vie des gens meilleurs autour
          de moi en apportant dans mes bagages humilité et bienveillance.
        </p>
        <p>
          Ma mission, celle que je me suis fixé à titre personnelle, dans une
          temporalité plus lointaine, est de prendre part à ce monde qui est en
          train d'évoluer. D'apprendre, de comprendre, de créer, modifier, en
          d'autres termes faire évoluer, autant que faire se peut, positivement
          notre monde.
        </p>
      </div>
    </section>
  );
};

export default Mission;
