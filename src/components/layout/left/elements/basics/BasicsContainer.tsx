import { useEffect } from "react";
import {
  getEducationData,
  selectEducation,
} from "../../../../../store/education/education-slice";
import {
  getInterestsData,
  selectInterests,
} from "../../../../../store/interests/interests-slice";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../store/resume-hooks";
import Card from "../../../../ui/card/Card";
import Courses from "../education/Courses";
import Education from "../education/Education";
import Interests from "../interests/Interests";
import LangugaesContainer from "../language/LanguagesConatainer";

import "./basicsContainer.scss";

function BasicsContainer() {
  const dispatcher = useAppDispatch();
  const education = useAppSelector(selectEducation);
  const interests = useAppSelector(selectInterests);

  useEffect(() => {
    dispatcher(getEducationData());
    dispatcher(getInterestsData());
  }, [dispatcher]);

  return (
    <Card className="basics__container">
      <p className="basics__container-section">Education</p>
      <div>
        {education.school.map((item) => {
          return (
            <Education
              key={item.degree}
              degree={item.degree}
              institution={item.institution}
              interval={item.interval}
            />
          );
        })}
      </div>
      <Courses courses={education.courses} />

      <p className="basics__container-section">Languages</p>
      <LangugaesContainer languages={education.languages} />

      <p className="basics__container-section">Driveing licese</p>
      <p className="basics__container-drivinglic">{education.driving_lic}</p>

      <p className="basics__container-section">Interests</p>
      <Interests interests={interests} />
    </Card>
  );
}

export default BasicsContainer;
