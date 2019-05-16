import React, { Component } from "react";
import "./App.css";

class ReservationCard extends Component {
  render() {
    return (
      <div className="reservation-card">
        <h2 className="reservation-name">{this.props.name}</h2>
        <p className="reservation-date">{this.props.date}</p>
        <p className="reservation-time">{this.props.time}</p>
        <p className="reservation-guests">Number of guests: {this.props.number}</p>
        <button>Cancel</button>
      </div>
    );
  }
}

export default ReservationCard;
