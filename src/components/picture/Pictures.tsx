import Card from "../ui/card/Card";
import "./pictures.scss";

type PictureProps = {
  className?: string;
};

function Pictures(props: PictureProps) {
  const url = process.env.PUBLIC_URL + "/imgs/AFK_cv-1.jpg";
  return (
    <Card className={`picture__container ${props.className}`}>
      <div
        className="picture__main"
        style={{
          background: `url(${url})`,
          backgroundPosition: "center",
          backgroundPositionY: "top",
          backgroundOrigin: "border-box",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </Card>
  );
}

export default Pictures;
