const fetchReservations = url => {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error("Fetch failed");
    } else {
      return response.json();
    }
  });
};

export { fetchReservations };
