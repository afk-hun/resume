import "./work.scss";

type WorkProps = {
  interval: string;
  position: string;
  unit?: string;
  company: string;
  place: string;
  description: string;
};

function Work(props: WorkProps) {
  return (
    <div className="work__container">
      <p className="work__container-interval">{props.interval}</p>
      <div className="wok_container-details">
        <div className="wok_container-details-title">
          <p className="wok_container-details-title-position">
            {props.position}
          </p>
          <p className="wok_container-details-title-unit">{props.unit}</p>
        </div>
        <div className="wok_container-details-location">
          <p className="wok_container-details-location-company">
            {props.company}
          </p>
          <p className="wok_container-details-location-place">{props.place}</p>
        </div>
        <p className="wok_container-details-description">{props.description}</p>
      </div>
    </div>
  );
}

export default Work;
