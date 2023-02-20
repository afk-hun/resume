import "./skillGroup.scss";

function SkillGroup(props: { skills: string[] }) {
  return (
    <div className="skills__container">
      {props.skills.map((item) => {
        const splited = item.split(";");
        return (
          <div className="skills__container-item" key={item}>
            <p>{splited[0]}</p>
            <p>{splited[1]}</p>
          </div>
        );
      })}

      {/* <div className="skills__container-item">
        <p>Agile</p>
        <p>Team work</p>
      </div>

      <div className="skills__container-item">
        <p>Agile</p>
        <p>Team work</p>
      </div>

      <div className="skills__container-item">
        <p>Agile</p>
        <p>Team work</p>
      </div>

      <div className="skills__container-item">
        <p>Agile</p>
        <p>Team work</p>
      </div>

      <div className="skills__container-item">
        <p>Agile</p>
        <p>Team work</p>
      </div> */}
    </div>
  );
}

export default SkillGroup;
