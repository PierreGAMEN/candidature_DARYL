/* eslint-disable react/prop-types */
import "./figure.scss";

const Figure = ({figure, description}) => {
  return (
    <div className="container_figure">
      <h3>{figure}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Figure;