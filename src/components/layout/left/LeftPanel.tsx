import Pictures from "../../picture/Pictures";
import BasicsContainer from "./elements/basics/BasicsContainer";
import "./leftPanel.scss";

function LeftPanel() {
  return (
    <div className="leftpanel">
      <Pictures className="image" />
      <BasicsContainer className="basics" />
    </div>
  );
}

export default LeftPanel;
