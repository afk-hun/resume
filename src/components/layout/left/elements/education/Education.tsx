import "./education.scss";

type EducationProps = {
  degree: string;
  institution: string;
  interval: string;
};

function Education(props: EducationProps) {
  return (
    <div className="education__container">
      <p className="education__container-degree">{props.degree}</p>
      <p>{props.institution}</p>
      <p>{props.interval}</p>
    </div>
  );
}

export default Education;
