/* eslint-disable react/prop-types */
import "./description.scss";

const Description = ({color1, color2, title, subtitle, p1, p2, p3}) => {
  return (
    <div className={`container_description ${color1}`}>
            <div className={`container_description_title ${color2}`}><h3>{title}</h3></div>
            <div className="container_description_text">
            <h4>{subtitle}</h4>
            {p1 && <p>{p1}</p>}
            {p2 && <p>{p2}</p>}
            {p3 && <p>{p3}</p>}
            </div>
            
        </div>
  );
};

export default Description;