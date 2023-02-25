import "./card.scss";

type Props = {
  className?: string;
  children?: JSX.Element | JSX.Element[] | string; //ReactChild;
};

function Card(props: Props) {
  const classes = `card ${props.className}`;
  return <div className={classes}>{props.children}</div>;
}

export default Card;
