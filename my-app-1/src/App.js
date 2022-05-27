import React from 'react';

const MyApp2_Button = React.lazy(
  () => import('myApp2/Button')
);


function App() {
  return (
    <div>
      <h1>This is myApp1 importing button from myApp2</h1>
      <React.Suspense fallback='Loading Button'>
        <MyApp2_Button/>
      </React.Suspense>
    </div>
  );
}

export default App;