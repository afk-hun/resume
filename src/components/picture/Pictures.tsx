import Card from "../ui/card/Card";
import "./pictures.scss";

type PictureProps = {
  className?: string;
};

function Pictures(props: PictureProps) {
  return (
    <Card className={`picture__container ${props.className}`}>
      <div
        className="picture__main"
        style={{
          background: `url(${process.env.PUBLIC_URL}/imgs/AFK_cv-1.jpg)`,
        }}
      ></div>
    </Card>
  );
}

export default Pictures;
