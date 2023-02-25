import { useEffect, useState } from "react";
import "./language.scss";

type LanguageProps = {
  languge: string;
  knowledge: number;
  motivation: number;
};

function Language(props: LanguageProps) {

  const [knowledgeWidth, setKnowledgeWidth] = useState(0);
  const [motivationWidth, setMotivationWidth] = useState(0);

  //const knowledgeWidth = `${props.knowledge}%`;
  //const motivationWidth = `${props.motivation}%`;

  useEffect(() => {
    setKnowledgeWidth(props.knowledge);
    setMotivationWidth(props.motivation);
  },[props, knowledgeWidth, motivationWidth])

  return (
    <div className="language__container">
      <p className="language__container-title">{props.languge}</p>
      <div className="language__container-colorbox">
        <div
          className="language__container-colorbox-knowledge"
          style={{ width: `${knowledgeWidth}%` }}
        />
        <div
          className="language__container-colorbox-motivation"
          style={{ width: `${motivationWidth}%` }}
        />
      </div>
    </div>
  );
}

export default Language;
