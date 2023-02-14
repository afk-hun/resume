import Contact from "./Contact";

import "./contactGroup.scss";

function ContactGroup() {
  return (
    <div className="contac-group__container">
      <Contact imageSrc="" text="akos.kalamar@gmail.com" />
      <Contact imageSrc="" text="+36-70/607-8765" />
      <Contact imageSrc="" text="AFK" />
      <Contact imageSrc="" text="Budapset" />
    </div>
  );
}

export default ContactGroup;
