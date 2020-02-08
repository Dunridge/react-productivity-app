import React from 'react';
import logo from './logo.svg';
import Columns from './components/columns';
import NavBar from './components/navbar';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <NavBar></NavBar>
      <Columns style={{ display: 'block', justifyContent: 'row' }}></Columns>
    </React.Fragment>
  );
}

export default App;
