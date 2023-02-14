import "./contact.scss";

type ContactProps = {
  imageSrc: string;
  text: string;
  hint?: string;
};

//todo hint, src fix
function Contact(props: ContactProps) {
  return (
    <div className="contact__container">
      <img></img>
      <p>{props.text}</p>
    </div>
  );
}

export default Contact;
