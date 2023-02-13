import { ReactElement } from "react";

import "./card.scss";

type ReactChild = React.ReactNode; // JSX.Element; //ReactElement | string | number;
type Props = {
  className?: string;
  children?: ReactChild;
};

function Card(props: Props) {
  const classes = "card" + " " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;
