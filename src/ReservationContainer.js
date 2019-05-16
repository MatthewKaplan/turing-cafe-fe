import React from 'react';
import ReservationCard from './ReservationCard';
import './ReservationContainer.css';

const ReservationContainer = ({reservations}) => {
  const displayReservations = reservations.map(reservation => (
    <ReservationCard {...reservation} />
  ))
  return <div className="cards">{displayReservations}</div>
}

export default ReservationContainer;
