import { InterestsType } from "../../../../../store/interests/interests-slice";
import "./interests.scss";

function Interests(props: { interests: InterestsType }) {
  return (
    <div className="interests__container">
      <p className="interests__container-title">{props.interests.title}</p>
      <ul>
        {props.interests.todo.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default Interests;
