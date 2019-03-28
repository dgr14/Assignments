import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="returnDiv">
      <div className="inputBadge">
          <form>
              {/* Input for the Name Badge */}
              <input type="text" name="firstName" />
              <input type="text" name="lastName" />
              <input type="text" name="email" />
              <input type="text" name="placeOfBirth" />
              <input type="number" name="phoneNum" />
              <input type="text" name="favFood" />
              <input type="text" name="aboutYourself" />
            
            <input type="submit" value="Submit" />
          </form>
      </div>

      <div className="displayBadge">

      

      </div>

      </div>
    );
  }
}

export default App;
