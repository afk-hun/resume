import Language from "./Language";

function LangugaesContainer() {
  return (
    <div>
      <Language languge="English" knowledge={55} motivation={75} />
      <Language languge="Svenska" knowledge={5} motivation={100} />
      <div>
        <p>knowledge</p>
        <p>motivation to imporove</p>
      </div>
    </div>
  );
}

export default LangugaesContainer;
