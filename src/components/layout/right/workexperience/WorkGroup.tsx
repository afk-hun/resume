import { ExperienceType } from "../../../../store/experience/experience-slice";
import Work from "./Work";

import "./workGroup.scss";

function WorkGroup(props: { works: ExperienceType[] }) {
  return (
    <div className="workGroup__container">
      {props.works.map((item) => {
        return (
          <Work
            key={item.interval}
            interval={item.interval}
            position={item.position}
            company={item.company}
            place={item.place}
            description={item.description}
            unit={item.unit}
          />
        );
      })}
    </div>
  );
}

export default WorkGroup;
