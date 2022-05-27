import React from 'react';

const MFE2_Button = React.lazy(
  () => import('MFE2/Button')
);


function App() {
  return (
    <div>
      <h1>MFE1</h1>
      <React.Suspense fallback='Loading Button'>
        <MFE2_Button></MFE2_Button>
      </React.Suspense>
    </div>
  );
}

export default App;