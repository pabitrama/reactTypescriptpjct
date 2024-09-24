// import React from 'react';
import './App.css';

import Employee from './Components/Employee';

import {exampleData} from './DataFiles/empData'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Employee employeeData={exampleData} />
        
        <div>{process.env.REACT_APP_API_URL}</div>
      </header>
    </div>
  );
}

export default App;
