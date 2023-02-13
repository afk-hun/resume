import Card from "../../../ui/card/Card";
import "./name.scss";

type NameProps = {
  firstName: string;
  middleName: string;
  lastName: string;
  role: string;
};

function Name(props: NameProps) {
  return (
    <Card className="name">
      <div className="name__container">
        <div className="name__container-group">
          <p className="name__container-group-firstname">{props.firstName}</p>
          <p className="name__container-group-middlename">{props.middleName}</p>
          <p className="name__container-group-lastname">{props.lastName}</p>
        </div>
        <p className="name__container-role">{props.role}</p>
      </div>
    </Card>
  );
}

export default Name;
