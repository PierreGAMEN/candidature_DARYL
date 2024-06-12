import "./contact.scss";

const Contact = () => {
  return (
    <section id="contact" className="container_contact">
      <div className="container_contact_text">
        <div className="divider"></div>
        <h2>Contact</h2>
        <div className="container_contact_content">
          <div>
            <span className="material-symbols-rounded">phone</span>
            <p>pierre.gamen@gmail.com</p>
          </div>
          <div>
            <span className="material-symbols-rounded">email</span>
            <p>0673607777</p>
          </div>
          <div>
            <span className="material-symbols-rounded">web</span>
            <a href="https://pierre-gamen.netlify.app/">Mon site web </a>
          </div>
          <div>
            <span className="material-symbols-rounded">@</span>
            <a href="https://www.linkedin.com/in/pierre-gamen">Linkedin</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
