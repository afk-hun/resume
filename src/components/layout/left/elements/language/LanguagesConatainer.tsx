import { LanguagesType } from "../../../../../store/education/education-slice";
import Language from "./Language";

import "./languageContainer.scss";

function LangugaesContainer(props: { languages: LanguagesType[] }) {
  return (
    <div className="languages__container">
      {props.languages.map((item) => {
        return (
          <Language
            key={item.name}
            languge={item.name}
            knowledge={item.knowledge}
            motivation={item.motivation}
          />
        );
      })}
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
