type LanguageProps = {
  languge: string;
  knowledge: number;
  motivation: number;
};

function Language(props: LanguageProps) {
  return (
    <div>
      <p>{props.languge}</p>
      <div>
        <div>knowledge</div>
        <div>motivation</div>
      </div>
    </div>
  );
}

export default Language;
