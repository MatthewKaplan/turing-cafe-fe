import React, { Component } from "react";
import ButtonContainer from "./ButtonContainer";
import { fetchReservations } from "./apiCalls";
import "./App.css";
import ReservationContainer from "./ReservationContainer";

class App extends Component {
  state = {
    reservations: [],
    error: ""
  };

  componentDidMount() {
    this.fetchCurrentReservations();
  }

  fetchCurrentReservations = () => {
    fetchReservations('http://localhost:3001/api/v1/reservations')
    .then(response => this.setState({ reservations: response}))
    .catch(error => this.setState({ error }))
  }

  render() {
    console.log(this.state.reservations)
    return (
      <div className="App">
        <h1 className="app-title">Turing Cafe Reservations</h1>
        <ButtonContainer />
        <div className="res-container">
          <ReservationContainer reservations={this.state.reservations}/>
        </div>
        <div className="resy-form" />
        <div className="resy-container" />
      </div>
    );
  }
}

export default App;
