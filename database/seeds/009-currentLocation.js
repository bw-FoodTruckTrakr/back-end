exports.seed = function(knex) {
  return knex('currentLocation').insert([
    {truck_id: 1, currentLocation: "corner of 7th ave and Broadway , NY, NY", currentDepartureTime:"1:00 pm"},
    {truck_id: 2, currentLocation: "32 Broadway St, NY, NY", currentDepartureTime:"1:30 pm"},
    {truck_id: 3, currentLocation: "116 Canal St, NY, NY", currentDepartureTime:"1:20 pm"},
    {truck_id: 4, currentLocation: "411 Avenue of the Americas, NY, NY1", currentDepartureTime:"2:30 pm"},
    {truck_id: 5, currentLocation: "Madison Park and Lexington Avenues, NY, NY", currentDepartureTime:"1:00 pm"},     
  ]);
};