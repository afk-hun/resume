import Card from "../../../ui/card/Card";
import "./contact.scss";

type ContactProps = {
  imageSrc: string;
  text: string;
  hint?: string;
  link?: string;
};

//todo hint, src fix
function Contact(props: ContactProps) {

  const tooltip = (
    <Card className="contact__container-tooltip">
      {props.hint}
    </Card>
  );

  const baseLayout = (
    <div className="contact__container">
      <img className="contact__container-img" src={props.imageSrc} />
      <div className="contact__container-text">
        {props.hint && tooltip}
        {props.text}
      </div>
    </div>
  );

  const linkLayout = (
    <a className="contact__link" href={props.link}>
      {baseLayout}
    </a>
  );

  return (
    <div>
      {props.link && linkLayout }
      {!props.link && baseLayout }
    </div>
    
    
  );
}

export default Contact;
