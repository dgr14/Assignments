import React, { Component } from 'react';
import Card from "./Card"
let vacationSpots = [
  {
    place: "Meridian, Idaho",
    price: 40,
    timeToGo: "Spring"
  },{
    place: "Cancun",
    price: 900,
    timeToGo: "Winter"
  },{
    place: "China",
    price: 1200,
    timeToGo: "Fall"
  },{
    place: "Russia",
    price: 1100,
    timeToGo: "Summer"
  },{
    place: "Lebanon",
    price: 400,
    timeToGo: "Spring"
  }
]
class App extends Component {
  render() {
    const colorArray = ["red", "blue", "green", "yellow"]
    const mapped = vacationSpots.map((spot, i) => {
      const backgroundColor = colorArray[i % colorArray.length]
      return <Card  place={spot.place}
                    backgroundColor={backgroundColor}
                    price={spot.price}
                    time={spot.timeToGo}/>
    })
    return (
      <div className="returnDiv">
        {mapped}


      </div>
    );
  }
}
export default App;