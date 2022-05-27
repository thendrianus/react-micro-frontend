import React from 'react';
const MyApp1_Button = React.lazy(
  () => import('myApp1/Button')
);

function App() {
  return (
    <div>
      <h1>This is myApp2 importing button from myApp1</h1>
      <React.Suspense fallback='Loading Button'>
        <MyApp1_Button />
      </React.Suspense>
    </div>
  );
}

export default App;
