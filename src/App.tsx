import React from 'react';
import LeftPanel from './components/left/LeftPanel';
import RightPanel from './components/right/RightPanel';

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <LeftPanel />
      <RightPanel />
    </div>
  );
}

export default App;
