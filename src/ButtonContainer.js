import React, { Component } from "react";

class ButtonContainer extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="buttonContainer">
        <input type="text" className="name" placeholder="Name" />
        <input type="text" className="date" placeholder="Date (mm/dd)" />
        <input type="text" className="time" placeholder="Time" />
        <input
          type="text"
          className="number-of-guests"
          placeholder="Number of guests"
        />
        <button className="make-reservation">Make Reservation</button>
      </div>
    );
  }
}

export default ButtonContainer;
