exports.seed = function(knex) {
  return knex('currentLocation').insert([
    {truck_id: 1, currentLocation: "123 abc rd, NY, NY", currentDepartureTime:"1:00 pm"},
    {truck_id: 2, currentLocation: "123 abc rd, NY, NY", currentDepartureTime:"1:30 pm"},
    {truck_id: 3, currentLocation: "123 abc rd, NY, NY", currentDepartureTime:"1:20 pm"},
    {truck_id: 4, currentLocation: "123 abc rd, NY, NY1", currentDepartureTime:"2:30 pm"},
    {truck_id: 5, currentLocation: "123 abc rd, NY, NY", currentDepartureTime:"1:00 pm"},     
  ]);
};