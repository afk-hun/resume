import Language from "./Language";

import "./languageContainer.scss";
function LangugaesContainer() {
  return (
    <div className="languages__container">
      <Language languge="English" knowledge={55} motivation={75} />
      <Language languge="Svenska" knowledge={5} motivation={100} />
      <div className="languages__container-hint">
        <p className="languages__container-hint-knowledge">knowledge</p>
        <p className="languages__container-hint-motivation">
          motivation to imporove
        </p>
      </div>
    </div>
  );
}

export default LangugaesContainer;
