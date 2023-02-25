import { useEffect } from "react";
import {
  getPersonData,
  selectPersonBasics,
} from "../../../../store/basic-infos/basic-info-slice";
import { useAppDispatch, useAppSelector } from "../../../../store/resume-hooks";

import Card from "../../../ui/card/Card";

import "./name.scss";

type NameProps = {
  className: string;
  firstName: string;
  middleName: string;
  lastName: string;
  role: string;
};

function Name(props: NameProps) {
  return (
    <Card className={`name ${props.className}`}>
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
