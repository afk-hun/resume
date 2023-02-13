import Contact from "../../../templates/contact/Contact";
import Description from "../../../templates/description/Description";
import SectionTitle from "../../../templates/titles/SectionTitle";
import Pictures from "../../picture/Pictures";
import BasicsContainer from "./elements/basics/BasicsContainer";
import "./leftPanel.scss";

function LeftPanel() {
  return (
    <div className="leftpanel">
      <div>
        <div className="picture">
          <Pictures />
        </div>
        <BasicsContainer />
        {/* <div className={styles.base}>
          <div className={styles.left}>
            <SectionTitle title="Education" />
            <Description
              title="Computer science Bsc ()"
              description="Eötvös Loránd University|2013-2015, 2017-2019"
            />
            <Description
              title="Photographer"
              description="FOCUS Education Center Ltd.|2020-2021"
            />
            <SectionTitle title="Interests" />
            <Description
              title="In my free time, I like:"
              description="-improving my knowledge|-biking|-taking photos|-hiking with my wife and our dog|-playing board games with my friends."
            />
          </div>
        </div>
      </div>
      <div className={styles.contact}>
        <Contact title="Phone" subtitle="+36-70/6078765" />
        <Contact title="E-mail" subtitle="akos.kalamar@gmail.com" />
        <Contact
          title="Address"
          subtitle="7. 8/53 Menyecske Street Budapest/1112"
  /> */}
      </div>
    </div>
  );
}

export default LeftPanel;
