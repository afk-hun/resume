import { useState } from "react";
import Card from "../ui/card/Card";
import "./pictures.scss";

type PictureProps = {
  className?: string;
};

function Pictures(props: PictureProps) {
  const classes = `picture ${props.className}`;
  const [isMouseEntered, setIsMouseEnetered] = useState(false);
  const [bgColor, setBgColor] = useState("#ffff00");

  const onMouseOverHandler = () => {
    if (!isMouseEntered) {
      const randomColor = `#${Math.floor(Math.random() * 16777215).toString(
        16
      )}`;
      setBgColor(randomColor);
      setIsMouseEnetered(true);
    }
  };

  const onMouseOutEvenet = () => {
    setBgColor("#ffff00");
    setIsMouseEnetered(false);
  };

  return (
    <Card className={`picture ${props.className}`}>
      {/* <div
        className="picture"
        style={{ backgroundImage: `url("../../imgs/AFK_cv-1.jpg")` }}
      /> */}
      {/* className={`${styles.picture}`}
      style={{ backgroundColor: `${bgColor}` }}
      onMouseOver={onMouseOverHandler} */}
      {/* onMouseOut={onMouseOutEvenet} */}
    </Card>
  );
}

export default Pictures;
