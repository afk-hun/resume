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
      <Contact imageSrc="svgs/mail.svg" 
        text={props.mail} 
        link={`mailto:${props.mail}`} 
        hint="Hire me! 🤙🏻" />
      <Contact imageSrc="svgs/phone.svg" text={props.phone} hint={"Call me, maybe 📲"} />
      <Contact imageSrc="svgs/linkedin.svg" text="AFK" link={props.linkedin} />
      <Contact imageSrc="svgs/pin.svg" text={props.city} />
    </div>
  );
}

export default ContactGroup;
