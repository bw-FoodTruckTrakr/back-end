
exports.seed = function(knex) {
  return knex('customerTruckRatings').insert([
    {truck_id: 1, rate: 4, diner_id: 1},
    {truck_id: 1, rate: 5, diner_id: 5},
    {truck_id: 1, rate: 4, diner_id: 4},
    {truck_id: 2, rate: 3, diner_id: 2},
    {truck_id: 2, rate: 5, diner_id: 1},
    {truck_id: 2, rate: 4, diner_id:3}
  ]);
};