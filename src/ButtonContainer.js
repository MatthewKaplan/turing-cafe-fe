import React, { Component } from "react";
import { fetchPost } from "./apiCalls";

class ButtonContainer extends Component {
  state = { name: "", date: "", time: "", number: "" };

  handleChange = e => {
    let value = e.target.value.toLowerCase();
    let key = e.target.classList;
    this.setState({
      [key]: value
    });
  };

  handleClick = e => {
    e.preventDefault();
    const url = "http://localhost:3001/api/v1/reservations";
    const userInput = this.state;
    const userOptionObject = {
      method: "POST",
      body: JSON.stringify(userInput),
      headers: { "Content-Type": "application/json" }
    };
    fetchPost(url, userOptionObject).then(response => console.log(response));
  };

  render() {
    console.log(this.state);
    return (
      <div className="buttonContainer">
        <form action="" className="reservation-form">
          <input
            type="text"
            className="name"
            placeholder="Name"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input
            type="text"
            className="date"
            placeholder="Date (mm/dd)"
            name="date"
            value={this.state.date}
            onChange={this.handleChange}
          />
          <input
            type="text"
            className="time"
            name="time"
            placeholder="Time"
            value={this.state.time}
            onChange={this.handleChange}
          />
          <input
            type="text"
            className="number"
            name="number"
            placeholder="Number of guests"
            value={this.state.number}
            onChange={this.handleChange}
          />
          <button className="make-reservation" onClick={this.handleClick}>
            Make Reservation
          </button>
        </form>
      </div>
    );
  }
}

export default ButtonContainer;
