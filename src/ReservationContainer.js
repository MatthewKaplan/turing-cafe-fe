import React from 'react';
import ReservationCard from './ReservationCard';

const ReservationContainer = ({reservations}) => {

  console.log(reservations)
  const displayReservations = reservations.map(reservation => (
    <ReservationCard {...reservation} />
  ))
  return <div>{displayReservations}</div>
}

export default ReservationContainer;
