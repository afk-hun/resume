import React from "react";
import LeftPanel from "./components/layout/left/LeftPanel";
import RightPanel from "./components/layout/right/RightPanel";
import Card from "./components/ui/card/Card";

import "./app.scss";

function App() {
  return (
    <div className="app_container">
      {/* <Card>Hej trevligt att träffas!</Card> */}

      <LeftPanel />
      <RightPanel />
    </div>
  );
}

export default App;
