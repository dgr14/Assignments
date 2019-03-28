import React, { Component } from 'react';
import './App.css';
import CounterContainter from './CounterContainer'

const App = () => {
   
    return (
      <div className="returnDiv">
       <CounterContainter defaultCounter='100' />



      </div>
    );
  
}

export default App;
