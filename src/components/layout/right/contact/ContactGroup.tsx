import Contact from "./Contact";

import "./contactGroup.scss";

type ContactType = {
  mail: string;
  phone: string;
  linkedin: string;
  city: string;
};

function ContactGroup(props: ContactType) {
  return (
    <div className="contac-group__container">
      <Contact imageSrc="" text={props.mail} />
      <Contact imageSrc="" text={props.phone} />
      <Contact imageSrc="" text="LinkedIn" />
      <Contact imageSrc="" text={props.city} />
    </div>
  );
}

export default ContactGroup;
