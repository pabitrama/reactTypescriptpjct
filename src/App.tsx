import React from 'react';
import './App.css';

import Employee from './Components/Employee';

import { exampleData } from './DataFiles/empData'

function App() {
  return (


    <>

    

      <div className="container-fluid bg-white">
        <div className="row">
          <div className="col-12">
            <h4>This is my first React app using Typescript.</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-12 px-2">
            <Employee employeeData={exampleData} />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h5>This is the dev url: {process.env.REACT_APP_API_URL}</h5>
          </div>
        </div>
      </div>
    </>

  );
}

export default App;
