import { Link } from "react-router-dom";
import "./mainpage.scss";

function MainPage() {
  return (
    <div className="main_page__container">
      <p>
        {/* <Link to={"/resume"} style={{ textDecoration: "none" }}> */}
        Hej! Jag heter Ákos, trevligt att träffas!
        {/* </Link> */}
      </p>
    </div>
  );
}

export default MainPage;
