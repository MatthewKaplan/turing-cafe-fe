import React, { Component } from "react";
import "./App.css";

class ReservationCard extends Component {
  render() {
    return (
      <div className="reservation-card">
        <h2 className="reservation-name">Name...</h2>
        <p className="reservation-date">Date...</p>
        <p className="reservation-time">Time...</p>
        <p className="reservation-guests">Number of guests: </p>
        <button>Cancel</button>
      </div>
    );
  }
}

export default ReservationCard;
