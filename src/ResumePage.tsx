import LeftPanel from "./components/layout/left/LeftPanel";
import RightPanel from "./components/layout/right/RightPanel";

import "./reusume.scss";

function ResumePage() {
    return (
        <div className="app_container">
            <LeftPanel />
            <RightPanel />
        </div>
    )
}

export default ResumePage;