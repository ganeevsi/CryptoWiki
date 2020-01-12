import React from 'react';
import './ProjectCss/App.css';
import ListApi from './Components/ListApi.js';

function App() 
{
  return (
    <div className="App">
      <div className="headingStyles">
          <h1>Crypto Wiki</h1>
          <ListApi/>
        </div>
    </div>
  );
}

export default App;
