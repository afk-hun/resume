import ContactGroup from "./contact/ContactGroup";
import WorkGroup from "./workexperience/WorkGroup";
import "./rightPanel.scss";
import SkillGroup from "./skills/SkillGroup";
import Name from "./name/Name";
import { useAppDispatch, useAppSelector } from "../../../store/resume-hooks";
import { useEffect } from "react";
import {
  getPersonData,
  selectPersonBasics,
} from "../../../store/basic-infos/basic-info-slice";

function RightPanel() {
  const dispatch = useAppDispatch();
  const person = useAppSelector(selectPersonBasics);

  useEffect(() => {
    dispatch(getPersonData());
  }, [dispatch]);

  return (
    <div className="rightpanel">
      <Name
        firstName={person.name.first_name}
        middleName={person.name.middle_name}
        lastName={person.name.last_name}
        role={person.role}
      />
      <div className="rightpanel__details">
        <ContactGroup
          mail={person.contact.mail}
          phone={person.contact.phone}
          linkedin={person.contact.linkedin}
          city={person.contact.location}
        />
        <p className="rightpanel__details-section">About me</p>
        <p className="rightpanel__details-aboutme">{person.about_me}</p>
        <p className="rightpanel__details-section">Work Experience</p>
        <WorkGroup />
        <p className="rightpanel__details-section">Skills</p>
        <SkillGroup />
      </div>
    </div>
  );
}

export default RightPanel;
