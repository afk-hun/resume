import { ExperienceType } from "../../../../store/experience/experience-slice";
import "./work.scss";

function Work(props: ExperienceType) {
  const descriptions = props.description.split("|");

  return (
    <div className="work__container">
      <p className="work__container-interval">{props.interval}</p>
      <div className="work_container-details">
        <div className="work_container-details-title">
          <p className="work_container-details-title-position">
            {props.position}
          </p>
          { props.unit && <p className="work_container-details-title-unit">{ `(${props.unit})`  }</p>}
        </div>
        <div className="work_container-details-location">
          <p className="work_container-details-location-company">
            {props.company},
          </p>
          <p className="work_container-details-location-place">{props.place}</p>
        </div>
        {descriptions.map((item) => {
          return (
            <p className="work_container-details-description" key={item}>
              {item}
            </p>
          );
        })}
        {/* <p className="wok_container-details-description">{props.description}</p> */}
      </div>
    </div>
  );
}

export default Work;
