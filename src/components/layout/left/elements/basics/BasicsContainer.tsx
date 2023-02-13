import Card from "../../../../ui/card/Card";
import Education from "../education/Education";
import Interests from "../interests/Interests";
import LangugaesContainer from "../language/LanguagesConatainer";

import "./basicsContainer.scss";

function BasicsContainer() {
  return (
    <Card className="basics__container">
      <p className="basics__container-section">Education</p>
      <Education
        degree="COMPUTER SCIENCE BSC"
        institution="ELTE"
        interval="endless"
      />
      <Education
        degree="COMPUTER SCIENCE BSC"
        institution="ELTE"
        interval="endless"
      />
      <Education
        degree="COMPUTER SCIENCE BSC"
        institution="ELTE"
        interval="endless"
      />
      <p className="basics__container-section">Languages</p>
      <LangugaesContainer />

      <p className="basics__container-section">Driveing licese</p>
      <p className="basics__container-drivinglic">Category B</p>

      <p className="basics__container-section">Interests</p>
      <Interests />
    </Card>
  );
}

export default BasicsContainer;
