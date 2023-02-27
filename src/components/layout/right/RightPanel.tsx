import ContactGroup from "./contact/ContactGroup";
import WorkGroup from "./workexperience/WorkGroup";
import SkillGroup from "./skills/SkillGroup";
import Name from "./name/Name";
import { useAppDispatch, useAppSelector } from "../../../store/resume-hooks";
import { useEffect } from "react";
import {
  getPersonData,
  selectPersonBasics,
} from "../../../store/basic-infos/basic-info-slice";
import {
  getExperience,
  selectExperience,
} from "../../../store/experience/experience-slice";

import "./rightPanel.scss";

function RightPanel() {
  const dispatch = useAppDispatch();
  const person = useAppSelector(selectPersonBasics);
  const experience = useAppSelector(selectExperience);

  useEffect(() => {
    dispatch(getPersonData());
    dispatch(getExperience());
  }, [dispatch]);

  return (
    <div>
      {person.status === "success" && (
        <div className="rightpanel">
          <Name
            className="rightpanel-name"
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
            <WorkGroup works={experience.experience} />
            <p className="rightpanel__details-section">Skills</p>
            <SkillGroup skills={experience.skills} />
          </div>
        </div>
      )}
    </div>
  );
}

export default RightPanel;
