import "./skillGroup.scss";

function SkillGroup(props: { skills: string[] }) {
  return (
    <div className="skills__container">
      {props.skills.map((item) => {
        const splited = item.split(";");
        return (
          <div className="skills__container-items" key={item}>
            <p className="skills__container-item-left">{splited[0]}</p>
            <p className="skills__container-item-right">{splited[1]}</p>
          </div>
        );
      })}
    </div>
  );
}

export default SkillGroup;
