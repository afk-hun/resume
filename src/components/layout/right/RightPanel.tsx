import Description from "../../../templates/description/Description";
import SectionTitle from "../../../templates/titles/SectionTitle";
import Job from "../../personal/job/Job";
import Name from "../../personal/name/Name";
import styles from "./RightPanel.module.css";

function RightPanel() {
  return (
    <div className={styles.container}>
      <Name name="Akos Ferenc Kalamar" knowledge="Software engineer" />
      <div className={styles.aboutmecontainer}>
        <SectionTitle title="About me" className="black" />
        <Description
          className="black"
          description={`I need sek sek, sek is what i need hej hej|I'm a developer who is trying himself in many different roles.`}
        />
      </div>
      <div className={styles.aboutmecontainer}>
        <SectionTitle title="Work experience" className="black" />
        <Job
          interval="2015-2018"
          position="Software developer"
          company="LOGIPIX/Budapest Hungary"
          jobDescription="Windows applicitaion developement (in Delphi) for security cameras, traffic and parking observation system. With this application the enduser can handle and supervise camera images and nvr system. "
        />
        <Job
          interval="2018-2019"
          position="Frontend developer"
          company="NNG LLC/Budapest Hungary"
          jobDescription="User interface developement for iGO navigation software with own built XML language and fill it with functionality by Lua script. We create this software for our aftermarket clients and our TIRE1 partners like Ferrari or Mazda"
        />
        <Job
          interval="2019-2020"
          position="Full stack developer"
          company="NNG LLC/Budapest Hungary"
          jobDescription="Working on many POC"
        />
        <Job
          interval="2020-Present"
          position="Full stack developer"
          company="NNG LLC/Budapest Hungary"
          jobDescription="iGO"
        />
      </div>
    </div>
  );
}

export default RightPanel;
