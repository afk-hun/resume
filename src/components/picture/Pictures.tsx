import Card from "../ui/card/Card";
import "./pictures.scss";

type PictureProps = {
  className?: string;
};

function Pictures(props: PictureProps) {
  return (
    <Card className={`picture ${props.className}`}>
    </Card>
  );
}

export default Pictures;
