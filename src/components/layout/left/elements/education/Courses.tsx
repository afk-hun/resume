import "./education.scss";

function Courses(props: { courses: string[] }) {
  return (
    <div className="education__container">
      <p className="education__container-degree">Courses</p>
      <div>
        {props.courses.map((item) => {
          return <p key={item}>{item}</p>;
        })}
      </div>
    </div>
  );
}

export default Courses;
