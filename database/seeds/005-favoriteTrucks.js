exports.seed = function(knex) {
  return knex('favoriteTrucks').insert([
    {diner_id: 1, favoriteTruck:"Bobs Burgers"},
    {diner_id: 1, favoriteTruck:"Roccos Tacos"},
    {diner_id: 2, favoriteTruck:"Kitchenette Karts"},
    {diner_id: 3, favoriteTruck:"Eurkea Street Food"},
  ]);
};